import React from "react";
import { Button } from "../dizzy/Button";
import { Input } from "../dizzy/Input";

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
        addTodo({
          id: `${numTodos + 1}`,
          text,
          completed: false,
        });
        setText("");
      }}
    >
      <Input
        type="text"
        name="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="fill"
        color="blue"
      />
      <Button color="primary" size="sm" typeSize="md" type="submit">
        Add
      </Button>
    </form>
  );
}

export default MyInput;
