import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { Table, ToDo } from "../components/Table";
import { GlobalStyles } from "../dizzy/GlobalStyles";
import { Typography } from "../dizzy/Typography";

import { useLocalStorage } from "../hooks/useLocalStorage";

const Home: NextPage = () => {
  const [serverSideTodos, setServerSideTodos] = useLocalStorage(
    "todos",
    [] as ToDo[]
  );
  const [clientSideTodos, setClientSideTodos] = useState([] as ToDo[]);

  useEffect(() => {
    setClientSideTodos(serverSideTodos);
  }, []);

  useEffect(() => {
    setServerSideTodos(clientSideTodos);
  }, [clientSideTodos, setServerSideTodos]);

  function handleDone(todo: ToDo) {
    setClientSideTodos(
      clientSideTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function handleAdd(todo: ToDo) {
    setClientSideTodos([...clientSideTodos, todo]);
  }

  function deleteTodo(todo: ToDo) {
    setClientSideTodos(clientSideTodos.filter((t) => t.id !== todo.id));
  }

  return (
    <>
      <GlobalStyles />
      <Head>
        <title>SSR Todos</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/trashcan.svg" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <Typography as="h1" size="xl" color="blue500" bold>
          Todo App
        </Typography>
        <div className="container flex flex-col justify-evenly items-center mt-2">
          <Table
            todos={clientSideTodos}
            handleDone={handleDone}
            deleteTodo={deleteTodo}
          />
          <Input numTodos={clientSideTodos.length} addTodo={handleAdd} />
        </div>
      </main>
    </>
  );
};

export default Home;
