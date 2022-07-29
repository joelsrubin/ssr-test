import type { NextPage } from "next";
import Head from "next/head";
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

      <main className="flex flex-col mx-auto h-screen justify-evenly">
        <div className="flex flex-col items-center w-full">
          <Table
            todos={todos}
            handleDone={handleDone}
            deleteTodo={deleteTodo}
            handleAdd={handleAdd}
          />
        </div>
      </main>
    </>
  );
};
const NonSSRWrapper = () => <Home />;
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
