import React from "react";
import DOMPurify from "dompurify";

import Share from "./Share";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/router";

export function Input({ slug }: { slug: string | string[] | undefined }) {
  const [text, setText] = React.useState("");

  const client = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitized = DOMPurify.sanitize(text);
    if (sanitized.length > 0) {
      await fetch("/api/add-posts-to-slug", {
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
      client.invalidateQueries(["todos"]);
    },
  });

  const route = useRouter();
  console.log(route);

  return (
    <form
      className="flex flex-row items-center justify-between px-4 py-5 text-lg"
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
      <div className="flex flex-row justify-between w-1/6">
        {isLoading ? (
          <div>
            <TailSpin height="20" width="20" color="gray" />
          </div>
        ) : (
          <button
            type="submit"
            className="hover:underline transition-all leading-6 duration-300"
          >
            Add
          </button>
        )}
      </div>
    </form>
  );
}
