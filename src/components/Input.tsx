import React from "react";
import DOMPurify from "dompurify";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import type { TListItem } from "../pages";

export function Input({
  slug,
  setList,
  list,
}: {
  slug: string | undefined;
  setList: (list: TListItem[]) => void;
  list: TListItem[];
}) {
  const [text, setText] = React.useState("");

  const client = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitized = DOMPurify.sanitize(text);
    if (sanitized.length > 0) {
      await fetch("/api/add-todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
          text: sanitized,
          completed: false,
        }),
      });
    }
  };
  const { mutate, isLoading } = useMutation(handleSubmit, {
    onSuccess: () => {
      setText("");

      const listContainsSlug = list.some((item) => item.slug === slug);
      if ((!list.length && slug) || (!listContainsSlug && slug)) {
        setList([...list, { slug, href: window.location.href }]);
      }

      client.invalidateQueries(["todos"]);
    },
  });

  return (
    <form
      className="flex flex-row items-center justify-around px-5 py-5"
      onSubmit={mutate}
    >
      <input
        type="text"
        name="text"
        placeholder="what should we do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="inherit outline-none bg-transparent"
      />

      {isLoading ? (
        <div>
          <TailSpin height="20" width="20" color="gray" />
        </div>
      ) : (
        <button
          type="submit"
          className="hover:underline transition-all duration-300"
        >
          Add
        </button>
      )}
    </form>
  );
}
