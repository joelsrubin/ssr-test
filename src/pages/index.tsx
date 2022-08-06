import type { NextPage } from "next";
import Head from "next/head";

import { List, ToDo } from "../components/List";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { generateSlug } from "random-word-slugs";
import { useLocalStorage } from "usehooks-ts";
import toast, { Toaster } from "react-hot-toast";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import Icon from "../components/Icon";

async function getTodos(slug: string | undefined | string[]) {
  const response = await fetch(`/api/get-todos/${slug}`);
  return await response.json();
}
async function deleteTodo(todo: ToDo) {
  const updatedTodos = await fetch(`/api/delete-todo/${todo.id}`);
  return await updatedTodos.json();
}

async function updateTodo({ id, completed }: ToDo) {
  const updated = await fetch(`/api/update-todo/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
  return await updated.json();
}

export type TListItem = {
  href: string;
  slug: string;
};

const Home: NextPage = () => {
  const [slug, setSlug] = useState<undefined | string>();
  const [list, setList] = useLocalStorage<TListItem[]>("slugList", []);

  const client = useQueryClient();
  const router = useRouter();

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
    onMutate: (data) => {
      client.cancelQueries(["todos"]);
      const updatedTodos: ToDo[] | undefined = client.getQueryData(["todos"]);
      if (updatedTodos) {
        let listWithoutUpdated = [...updatedTodos].filter((todo) => {
          return todo.id !== data.id;
        });
        listWithoutUpdated.push({
          ...data,
          completed: data.completed,
        });

        client.setQueryData(["todos"], listWithoutUpdated);
      }
    },
    onSuccess: () => {
      client.invalidateQueries(["todos"]);
    },
  });

  const { data } = useQuery<ToDo[]>(["todos"], () => getTodos(slug), {
    enabled: !!slug,
    refetchOnWindowFocus: false,
  });
  const { mutate: deleteTodoAsync } = useMutation(deleteTodo, {
    onMutate: async (deleteTodo) => {
      await client.cancelQueries(["todos"]);
      const nextTodos = data?.filter((todo) => todo.id !== deleteTodo.id);
      client.setQueryData(["todos"], nextTodos);
      return nextTodos;
    },
    onSettled: (nextTodos) => {
      updatePrioritiesAsync(
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
    <>
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="my ssr todo app" />
        <link rel="apple-touch-icon" href="/airplane.png" />
        <link rel="icon" href="/trashcan.svg" />
      </Head>
      <main className="flex flex-col mx-auto h-full justify-evenly">
        <div className="sticky top-0 p-4">
          <div className="flex flex-row w-fit gap-4">
            <Icon
              img={`/share.svg`}
              alt="share"
              clickHandler={async () => {
                await navigator.clipboard.writeText(window.location.href);
                toast.success(`${slug} has been copied to clipboard!`, {
                  duration: 3500,
                  icon: "👏",
                });
              }}
            />
            <Icon
              img="/database.svg"
              alt="saved lists"
              clickHandler={() => {
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
                        className="w-full border border-transparent rounded-sm p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ));
              }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <List
            todos={data}
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
    </>
  );
};

export default Home;
