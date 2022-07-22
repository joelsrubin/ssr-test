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
  const [error, setError] = React.useState("");
  return (
    <>
      <form
        className="flex flex-row items-center justify-evenly gap-4 mt-4 text-lg"
        onSubmit={(e) => {
          e.preventDefault();
          if (!text) {
            setError("Please enter a todo");
            return;
          }
          addTodo({
            id: `${numTodos + 1}`,
            text,
            completed: false,
          });
          setText("");
        }}
      >
        <div>
          <input
            type="text"
            name="text"
            placeholder="Add a todo"
            value={text}
            onChange={(e) => {
              setError("");
              setText(e.target.value);
            }}
            className="border rounded-lg p-4 w-full"
          />
        </div>
        <button
          className="bg-green-200 p-4 w-full rounded-md hover:bg-green-300 flex-1 align-bottom"
          type="submit"
        >
          Add
        </button>
      </form>
      <label className="text-left text-red-300 py-2">{error || null}</label>
    </>
  );
}

export default Input;
