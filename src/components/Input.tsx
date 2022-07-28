import React from "react";
import { Button } from "../dizzy/Button";
import { Input } from "../dizzy/Input";
import DOMPurify from "dompurify";

import { ToDo } from "./Table";

export function MyInput({
  addTodo,
  numTodos,
}: {
  addTodo: (todo: ToDo) => void;
  numTodos: number;
}) {
  const [text, setText] = React.useState("");
  return (
    <form
      className="flex flex-row items-center justify-evenly gap-4 mt-4 text-lg fixed bottom-0 pb-10 px-6"
      onSubmit={(e) => {
        e.preventDefault();
        const sanitized = DOMPurify.sanitize(text);
        if (sanitized.length > 0) {
          addTodo({
            id: Math.random(),
            text: sanitized,
            completed: false,
            subTodos: [
              {
                id: Math.random(),
                text: "Add a sub-todo",
                completed: false,
                subTodos: [],
              },
              {
                id: Math.random(),
                text: "this is sub",
                completed: false,
                subTodos: [],
              },
              {
                id: Math.random(),
                text: "this is another sub",
                completed: false,
                subTodos: [],
              },
            ],
          });
          setText("");
        }
      }}
    >
      <Input
        type="text"
        name="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="contained"
        color="neutral"
      />
      <Button color="primary" size="md" typeSize="md" type="submit">
        Add
      </Button>
    </form>
  );
}

export default MyInput;
