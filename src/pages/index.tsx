import type { NextPage } from "next";
import Head from "next/head";

import { List, ToDo } from "../components/List";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { generateSlug } from "random-word-slugs";
import { useLocalStorage, useDarkMode } from "usehooks-ts";
import toast, { Toaster } from "react-hot-toast";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { IconSun, IconSunglasses, IconShare, IconFolder } from "@tabler/icons";

import { deleteTodo, getTodos, updateTodo } from "../services";
import dynamic from "next/dynamic";

export type TListItem = {
  href: string;
  slug: string;
};

const Home: NextPage = () => {
  const [slug, setSlug] = useState<undefined | string>();
  const [list, setList] = useLocalStorage<TListItem[]>("slugList", []);
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  const client = useQueryClient();
  const router = useRouter();
  const { data: _globalTodos } = useQuery<ToDo[]>(
    ["todos"],
    () => getTodos(slug),
    {
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
    onSuccess: async () => {
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
      if (router.asPath === "/") {
        const newSlug = generateSlug(3);
        router.query.slug = newSlug;
        router.push(router);
        setSlug(newSlug);
      } else {
        setSlug(router.query.slug as string);
      }
    },
    [router]
  );

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="my ssr todo app" />
        <link rel="apple-touch-icon" href="/airplane.png" />
        <link rel="icon" href="/trashcan.svg" />
        <meta name="theme-color" content={isDarkMode ? "#1F2937" : "#fffbeb"} />
      </Head>
      <main className="flex flex-col mx-auto min-h-screen justify-start dark:bg-black transition-colors duration-500">
        <div className="sticky top-0 p-4 bg-amber-50 dark:bg-gray-800 transition-colors duration-500 delay-75">
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-row justify-evenly w-1/4 sm:w-1/5">
              <IconShare
                color={isDarkMode ? "white" : "black"}
                className="hover:scale-110 duration-200 cursor-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText(window.location.href);
                  toast.success(`${slug} has been copied to clipboard!`, {
                    duration: 3500,
                    icon: "👏",
                  });
                }}
              />
              <IconFolder
                color={isDarkMode ? "white" : "black"}
                className="hover:scale-110 duration-200 cursor-pointer transition-colors"
                onClick={() => {
                  toast((t) => (
                    <div className={`flex flex-col`}>
                      <p className="text-sm font-lg text-gray-900 text-center p-4">
                        Recent Lists
                      </p>
                      <ul>
                        {list
                          .slice(-5)
                          .reverse()
                          .map((listItem) => (
                            <a href={listItem.href} key={listItem.href}>
                              <li className="flex flex-col items-center justify-center p-4 hover:underline hover:bg-slate-100 cursor-pointer">
                                {listItem.slug}
                              </li>
                            </a>
                          ))}
                      </ul>
                      <div className="flex">
                        <button
                          onClick={() => toast.dismiss(t.id)}
                          className="w-full border border-transparent rounded-sm p-4 flex items-center justify-center text-sm font-medium text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ));
                }}
              />
            </div>
            <div
              className="px-4 hover:scale-110 duration-200 cursor-pointer"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <IconSun color="white" /> : <IconSunglasses />}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-3/4 py-4">
          <List
            todos={_globalTodos}
            handleDone={updateTodoAsync}
            deleteTodo={deleteTodoAsync}
            slug={slug}
            setList={setList}
            list={list}
            updatePrioritiesAsync={updatePrioritiesAsync}
          />
        </div>
      </main>
      <Toaster />
    </div>
  );
};

const NonSSRWrapper = () => <Home />;
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
