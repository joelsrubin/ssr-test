import React from "react";

import { ToDo } from "./Table";

export function Input({
  addTodo,
  numTodos,
}: {
  addTodo: (todo: ToDo) => void;
  numTodos: number;
}) {
  const [text, setText] = React.useState("");
  return (
    <form
      className="flex flex-row items-center justify-evenly gap-4 mt-4 text-lg"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          id: `${numTodos + 1}`,
          text,
          completed: false,
        });
        setText("");
      }}
    >
      <input
        type="text"
        name="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded-lg p-4 w-full"
      />
      <button
        className="bg-green-200 p-4 w-full rounded-md hover:bg-green-300 flex-1"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default Input;
