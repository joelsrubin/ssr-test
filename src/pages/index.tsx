import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { Table, ToDo } from "../components/Table";
import { GlobalStyles } from "../dizzy/GlobalStyles";
import { Typography } from "../dizzy/Typography";
import { useLocalStorage } from "usehooks-ts";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const [todos, setTodos] = useLocalStorage("todos", [] as ToDo[]);

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
      <GlobalStyles />
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="my ssr todo app" />
        <link rel="icon" href="/trashcan.svg" />
      </Head>

      <main className="container flex flex-col items-center justify-center h-screen w-[110vw]">
        <Typography as="h1" size="xl" color="blue500" bold>
          Todo App
        </Typography>
        <div className="container flex flex-col justify-evenly items-center mt-2">
          <Table
            todos={todos}
            handleDone={handleDone}
            deleteTodo={deleteTodo}
          />
          <Input numTodos={todos.length} addTodo={handleAdd} />
        </div>
      </main>
    </>
  );
};
const NonSSRWrapper = () => <Home />;
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
