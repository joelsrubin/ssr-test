import React from "react";
import { Button } from "../dizzy/Button";
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
        className="flex flex-row items-center justify-evenly gap-4 mt-10 text-lg"
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
        <Button color="orange" type="submit">
          Add
        </Button>
      </form>
      <label className="text-left text-red-300 py-2">{error || null}</label>
    </>
  );
}

export default Input;
