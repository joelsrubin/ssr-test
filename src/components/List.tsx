import Image from "next/image";
import { marked } from "marked";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useRef } from "react";

import { Input } from "./Input";

export type ToDo = {
  id: string;
  text: string;
  completed: boolean;
};

type TListProps = {
  children?: React.ReactNode;
  handleDone: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
  slug: string | string[] | undefined;
  todos: ToDo[] | undefined;
};

function EmptyRow() {
  return (
    <li className="flex flex-row justify-center bg-gray-200">
      <div className="px-10 py-5 text-center">Add A Todo</div>
      <div className="px-10 py-5 text-center">
        <span className="text-xl">
          <h1>🫥</h1>
        </span>
      </div>
    </li>
  );
}

export const List: React.FC<TListProps> = ({
  todos,
  handleDone,
  deleteTodo,
  slug,
}) => {
  const [listRef] = useAutoAnimate<HTMLUListElement>();

  const lastListElementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (lastListElementRef.current) {
      lastListElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [todos]);

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen max-h-50 py-10">
      <ul
        className="text-lg mx-auto border rounded-md w-3/4 md:w-1/2 sm:w-1/2 overflow-auto shadow-md"
        ref={listRef}
      >
        {todos?.length ? (
          todos
            .sort((a, b) => +a.completed - +b.completed)
            .map((todo, i) => (
              <li
                key={todo.id}
                className="flex flex-row w-full justify-between odd:bg-gray-200"
              >
                <div className="flex flex-row">
                  <div
                    className={`cursor-pointer p-4 ${
                      todo.completed &&
                      "line-through decoration-4 text-gray-500"
                    } transition-colors duration-500 `}
                    onClick={() => handleDone(todo)}
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(todo.text),
                    }}
                  />
                </div>
                <div className="p-4 min-h-25 min-w-25 shrink-0">
                  <button
                    className="cursor-pointer"
                    onClick={() => deleteTodo(todo)}
                  >
                    <Image
                      src="/trashcan.svg"
                      alt="delete"
                      height={25}
                      width={25}
                      className="min-h-25 min-w-25 shrink-0 hover:scale-110 duration-200"
                    />
                  </button>
                </div>
              </li>
            ))
        ) : (
          <EmptyRow />
        )}
        <li ref={lastListElementRef} className="border-t-2 border-slate-200">
          <Input slug={slug} />
        </li>
      </ul>
    </div>
  );
};
