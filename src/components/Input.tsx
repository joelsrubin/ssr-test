import React from "react";
import DOMPurify from "dompurify";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import type { TListItem } from "../pages";
import { ToDo } from "./List";

export function Input({
  slug,
  setList,
  list,
  todos,
}: {
  slug: string | undefined;
  setList: (list: TListItem[]) => void;
  list: TListItem[];
  todos: ToDo[] | undefined;
}) {
  const [text, setText] = React.useState("");
  const client = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitized = DOMPurify.sanitize(text);
    if (sanitized.length > 0) {
      const updatedList = await fetch("/api/add-todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
          text: sanitized,
          completed: false,
          priority: todos?.length || 0,
        }),
      });

      return await updatedList.json();
    }
  };
  const { mutate, isLoading } = useMutation(handleSubmit, {
    onSuccess: (data) => {
      setText("");
      // operation to consider adding the slug to the list
      const listContainsSlug = list.some((item) => item.slug === slug);
      if ((!list.length && slug) || (!listContainsSlug && slug)) {
        setList([...list, { slug, href: window.location.href }]);
      }

      client.setQueryData(["todos"], data);
    },
  });

  return (
    <form onSubmit={mutate}>
      <div className="flex flex-row justify-between bg-gradient-to-r from-cyan-200 to-blue-300 text-black placeholder-current ">
        <input
          type="text"
          name="text"
          placeholder="what todo?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="inherit outline-none bg-transparent p-4 w-3/4"
        />

        {isLoading ? (
          <div className="flex justify-center">
            <TailSpin height="20" width="20" color="white" />
          </div>
        ) : (
          <button type="submit" className="hover:underline p-4 shrink-0">
            Add
          </button>
        )}
      </div>
    </form>
  );
}
