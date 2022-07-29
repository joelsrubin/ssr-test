import type { NextPage } from "next";
import Head from "next/head";

import { List, ToDo } from "../components/List";

import { useLocalStorage } from "usehooks-ts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { generateSlug } from "random-word-slugs";

import { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  const [todos, setTodos] = useLocalStorage<ToDo[]>("todos", []);

  const [slug, setSlug] = useState<undefined | string | string[]>();

  const router = useRouter();

  useEffect(
    function establishQueryParams() {
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

  async function fetchSlugs() {
    const data = await fetch("/api/slugs");
    const slugs = await data.json();
  }

  async function postSlug(slug: string) {
    const data = await fetch("/api/new-slug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
    const slugs = await data.json();
  }

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

      <main className="flex flex-col mx-auto h-screen justify-evenly">
        <div className="flex flex-col items-center w-full">
          <List
            todos={todos}
            handleDone={handleDone}
            deleteTodo={deleteTodo}
            handleAdd={handleAdd}
            slug={slug}
          />
        </div>
      </main>
      <Toaster />
    </>
  );
};
const NonSSRWrapper = () => <Home />;
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
