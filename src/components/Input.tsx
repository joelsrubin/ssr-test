import React from "react";
import DOMPurify from "dompurify";

import { ToDo } from "./List";
import Share from "./Share";
import toast from "react-hot-toast";

export function Input({
  addTodo,
  slug,
}: {
  slug: string | string[] | undefined;
  addTodo: (todo: ToDo) => void;
}) {
  const [text, setText] = React.useState("");
  return (
    <form
      className="flex flex-row items-center justify-between px-4 py-5 text-lg"
      onSubmit={(e) => {
        e.preventDefault();
        const sanitized = DOMPurify.sanitize(text);
        if (sanitized.length > 0) {
          addTodo({
            id: Math.random(),
            text: sanitized,
            completed: false,
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
      <div className="flex flex-row justify-between w-1/6">
        <button
          type="submit"
          className="hover:underline transition-all leading-6 duration-300"
        >
          Add
        </button>
        <Share
          clickHandler={async () => {
            await navigator.clipboard.writeText(String(slug));
            toast.success(`${slug} has been copied to clipboard!`, {
              duration: 3500,
              icon: "👏",
            });
          }}
        />
      </div>
    </form>
  );
}
