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
      className="flex flex-row items-center justify-evenly gap-4 mt-4 text-lg"
      onSubmit={(e) => {
        e.preventDefault();
        const sanitized = DOMPurify.sanitize(text);
        if (sanitized.length > 0) {
          addTodo({
            id: `${numTodos + 1}`,
            text: sanitized,
            completed: false,
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
