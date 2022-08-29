import React from "react";
import DOMPurify from "dompurify";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";
import type { TListItem } from "../pages";
import { ToDo } from "./List";
import { IconPencilPlus } from "@tabler/icons";

export function Input({
  slug,
  setList,
  list,
  todos,
  isDarkMode,
}: {
  slug: string | undefined;
  setList: (list: TListItem[]) => void;
  list: TListItem[];
  todos: ToDo[] | undefined;
  isDarkMode: boolean;
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
      <div className="flex flex-row justify-between bg-gradient-to-r from-cyan-200 to-blue-300 placeholder-gray-200 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">
        <input
          type="text"
          name="text"
          placeholder="What's next?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="inherit w-3/4 bg-transparent p-4 leading-8 outline-none selection:bg-slate-200 dark:selection:bg-black dark:placeholder:text-white"
          spellCheck={false}
        />

        {isLoading ? (
          <div className="flex justify-center p-4">
            <SyncLoader
              color={isDarkMode ? "white" : "black"}
              size={8}
              cssOverride={{ opacity: 0.5 }}
            />
          </div>
        ) : (
          <button
            type="submit"
            className="shrink-0 p-4 duration-200 hover:scale-110"
          >
            <IconPencilPlus />
          </button>
        )}
      </div>
    </form>
  );
}
