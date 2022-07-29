import React from "react";
import { Button } from "../dizzy/Button";
import { Input } from "../dizzy/Input";
import DOMPurify from "dompurify";

import { ToDo } from "./Table";

export function MyInput({ addTodo }: { addTodo: (todo: ToDo) => void }) {
  const [text, setText] = React.useState("");
  return (
    <form
      className="flex flex-row items-center justify-evenly px-8 py-5 text-lg"
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
      <input
        type="text"
        name="text"
        placeholder="what should we do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="inherit outline-none bg-transparent"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MyInput;
