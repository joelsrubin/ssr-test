import type { NextPage } from "next";
import Head from "next/head";

import { List, ToDo } from "../components/List";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { generateSlug } from "random-word-slugs";

import toast, { Toaster } from "react-hot-toast";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Share from "../components/Share";
import { useOthers } from "../../liveblocks.config";

async function getTodos(slug: string | undefined | string[]) {
  const response = await fetch(`/api/get-todos/${slug}`);
  return await response.json();
}
async function deleteTodo(todo: ToDo) {
  await fetch(`/api/delete-todo/${todo.id}`);
}

async function updateTodo(todo: ToDo) {
  await fetch(`/api/update-todo/${todo.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: todo.completed }),
  });
}

const Home: NextPage = () => {
  const [slug, setSlug] = useState<undefined | string | string[]>();
  const client = useQueryClient();
  const router = useRouter();
  const others = useOthers();

  const { mutate: deleteTodoAsync } = useMutation(deleteTodo, {
    onSuccess: () => {
      client.invalidateQueries(["todos"]);
    },
  });
  const { mutate: updateTodoAsync } = useMutation(updateTodo, {
    onSuccess: () => {
      client.invalidateQueries(["todos"]);
    },
  });

  const { data } = useQuery<ToDo[]>(["todos"], () => getTodos(slug), {
    enabled: !!slug,
    refetchOnWindowFocus: false,
  });

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

  return (
    <>
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="my ssr todo app" />
        <link rel="apple-touch-icon" href="/airplane.png" />
        <link rel="icon" href="/trashcan.svg" />
      </Head>
      <div className="sticky top-0 p-4">
        <Share
          clickHandler={async () => {
            await navigator.clipboard.writeText(window.location.href);
            toast.success(`${slug} has been copied to clipboard!`, {
              duration: 3500,
              icon: "👏",
            });
          }}
        />
      </div>
      <main className="flex flex-col mx-auto h-full justify-evenly">
        <div className="flex flex-col items-center w-full">
          <List
            todos={data}
            handleDone={updateTodoAsync}
            deleteTodo={deleteTodoAsync}
            slug={slug}
          />
        </div>
      </main>
      <Toaster />
    </>
  );
};

export default Home;
