import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";

import { List, ToDo } from "../components/List";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { generateSlug } from "random-word-slugs";
import { useLocalStorage, useDarkMode } from "usehooks-ts";
import { Toaster } from "react-hot-toast";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { deleteTodo, getTodos, updateTodo } from "../services";
import { metaObj } from "../constants";
import Navbar from "../components/Navbar";

export type TListItem = {
  href: string;
  slug: string;
};

const Home = ({
  data: serverSideTodos,
  slug: serverSideSlug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [slug, setSlug] = useState<undefined | string>(serverSideSlug);
  const [list, setList] = useLocalStorage<TListItem[]>("slugList", []);
  const [colorMode, rawSetColorMode] = useState<string | undefined>(undefined);

  const setColorMode = (value) => {
    rawSetColorMode(value);
    window.localStorage.setItem("color-mode", value);
    document.documentElement.setAttribute("class", value);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.getAttribute("class");
    rawSetColorMode(initialColorValue!);
  }, []);

  const isDarkMode = colorMode === "dark";
  const client = useQueryClient();
  const router = useRouter();
  const { data: _globalTodos, isLoading: isLoadingData } = useQuery<ToDo[]>(
    ["todos"],
    () => getTodos(slug),
    {
      initialData: serverSideTodos,
      enabled: !!slug,
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: updatePrioritiesAsync } = useMutation(
    async (data: { id: string; priority: number }[]) => {
      const nextInfo = await fetch("/api/update-todo-priority", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, slug }),
      });
      return await nextInfo.json();
    },
    {
      onSuccess: (updatedTodos) => {
        client.setQueryData(["todos"], updatedTodos);
      },
    }
  );

  const { mutate: updateTodoAsync } = useMutation(updateTodo, {
    onMutate: async (newTodo) => {
      await client.cancelQueries(["todos"]);

      let listWithoutUpdated = [..._globalTodos!].filter(
        (todo) => todo.id !== newTodo.id
      );
      listWithoutUpdated.push({
        ...newTodo,
        completed: newTodo.completed,
      });

      client.setQueryData(["todos"], listWithoutUpdated);
    },
    onSettled: async () => {
      await client.invalidateQueries(["todos"]);
    },
  });

  const { mutate: deleteTodoAsync } = useMutation(deleteTodo, {
    onMutate: async (deleteTodo) => {
      await client.cancelQueries(["todos"]);
      const nextTodos = _globalTodos?.filter(
        (todo) => todo.id !== deleteTodo.id
      );
      client.setQueryData(["todos"], nextTodos);
      return nextTodos;
    },
    onSettled: async (nextTodos) => {
      await updatePrioritiesAsync(
        nextTodos.map(({ id, priority }) => ({ id, priority }))
      );
    },
  });

  useEffect(
    function establishQueryParams() {
      if (!slug) {
        const newSlug = generateSlug(3);
        router.query.slug = newSlug;
        router.push(router);
        setSlug(newSlug);
      }
    },
    [slug, router]
  );

  return (
    <>
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="my ssr todo app" />
        <link rel="apple-touch-icon" href="/airplane.png" />
        <link rel="icon" href="/trashcan.svg" />
        <meta name="theme-color" content={metaObj[colorMode!]} />
      </Head>
      <main className="flex flex-col mx-auto min-h-screen justify-start dark:bg-black transition-colors duration-500">
        <Navbar
          colorMode={colorMode}
          slug={slug}
          isDarkMode={isDarkMode}
          list={list}
          setColorMode={setColorMode}
        />
        <div className="flex flex-col w-full h-3/4 pt-20">
          <List
            todos={_globalTodos}
            handleDone={updateTodoAsync}
            deleteTodo={deleteTodoAsync}
            slug={slug}
            setList={setList}
            list={list}
            updatePrioritiesAsync={updatePrioritiesAsync}
            isDarkMode={isDarkMode}
            colorMode={colorMode}
            isLoading={isLoadingData}
          />
        </div>
      </main>
      <Toaster />
    </>
  );
};
type TErrorMessage = {
  message: string;
};
export async function getServerSideProps(context) {
  const { slug } = context.query;

  const dev = process.env.NODE_ENV !== "production";
  if (!slug) {
    return { props: { data: [] } };
  }
  const server = dev
    ? "http://localhost:3000"
    : "https://ssr-test-seven.vercel.app";

  try {
    const res = await fetch(`${server}/api/get-todos/${slug}`);
    const data: ToDo[] = await res.json();
    return {
      props: {
        data,
        slug,
      },
    };
  } catch {
    throw new Error("Something went wrong");
  }
}

export default Home;
