import type { NextPage } from "next";
import Head from "next/head";

import { List, ToDo } from "../components/List";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { generateSlug } from "random-word-slugs";
import ContentEditable from "react-contenteditable";
import { Toaster } from "react-hot-toast";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

async function getTodos(slug: string | undefined | string[]) {
  const response = await fetch(`/api/posts/${slug}`);
  return await response.json();
}

const Home: NextPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [slug, setSlug] = useState<undefined | string | string[]>();

  useQuery<ToDo[]>(["todos"], () => getTodos(slug), {
    enabled: !!slug,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setTodos(data);
    },
  });
  const router = useRouter();

  useEffect(
    function establishQueryParams() {
      console.log("here");
      if (router.asPath === "/") {
        const newSlug = generateSlug(3);
        router.query.slug = newSlug;
        router.push(router);
        setSlug(newSlug);
      } else {
        setSlug(router.query.slug);
      }
    },
    [router]
  );

  function handleDone(todo: ToDo) {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function handleAdd(todo: ToDo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(todo: ToDo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <>
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="my ssr todo app" />
        <link rel="icon" href="/trashcan.svg" />
      </Head>

      <main className="flex flex-col mx-auto h-full justify-evenly">
        <div className="flex flex-col items-center w-full">
          <List
            todos={todos}
            handleDone={handleDone}
            deleteTodo={deleteTodo}
            slug={slug}
          />
        </div>
      </main>
      <Toaster />
    </>
  );
};

export default Home;
