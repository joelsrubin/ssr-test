import Image from "next/image";
import { marked } from "marked";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconGripVertical } from "@tabler/icons";
import { Input } from "./Input";
import { Reorder } from "framer-motion";

import type { TListItem } from "../pages";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type ToDo = {
  id: string;
  text: string;
  completed: boolean;
  priority: number;
};

type TListProps = {
  handleDone: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
  slug: string | undefined;
  setList: (list: TListItem[]) => void;
  list: TListItem[];
  todos: ToDo[] | undefined;
  updatePrioritiesAsync: (data: { id: string; priority: number }[]) => void;
};

function EmptyRow() {
  return (
    <li className="flex flex-row justify-center">
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
  setList,
  list,
  updatePrioritiesAsync,
}) => {
  const [sortableList, setSortableList] = useState<ToDo[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(
    function updateTodosFromDBAndSort() {
      todos && todos.length
        ? setSortableList(todos.sort((a, b) => a.priority - b.priority))
        : setSortableList([]);
    },
    [todos]
  );

  const lastListElementRef = useRef<HTMLLIElement>(null);
  const dragNode = useRef<ToDo | null>(null);

  const updatePriority = useCallback(async () => {
    dragNode.current = null;
    const idsWithPriority = sortableList.map((todo, i) => {
      return { id: todo.id, priority: i, text: todo.text };
    });

    updatePrioritiesAsync(idsWithPriority);
    setIsDragging(false);
  }, [sortableList, updatePrioritiesAsync]);

  useEffect(() => {
    if (lastListElementRef.current) {
      lastListElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [sortableList]);

  return (
    <div className="w-full flex flex-col items-center h-3/4 max-h-3/4 select-none justify-center">
      <ul className="text-lg mx-auto border rounded-md w-3/4 md:w-1/2 sm:w-1/2 overflow-auto shadow-md gap-2">
        <li>
          <Input slug={slug} setList={setList} list={list} todos={todos} />
        </li>
        <Reorder.Group
          axis="y"
          values={sortableList}
          onReorder={setSortableList}
        >
          {sortableList?.length ? (
            sortableList.map((todo, i) => (
              <Reorder.Item
                key={todo.id}
                value={todo}
                as="div"
                onDragStart={() => {
                  setIsDragging(true);
                  dragNode.current = todo;
                }}
                onTouchStart={() => {
                  setIsDragging(true);
                  dragNode.current = todo;
                }}
                onDragEnd={updatePriority}
              >
                <li
                  className={`flex flex-row w-full justify-between border-y-2 border-gray-200 ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                  } ${
                    dragNode.current === todo && "bg-gray-200 opacity-50 z-10"
                  } `}
                >
                  <div className="flex flex-row">
                    <div
                      className={`flex justify-center items-center ${
                        isDragging ? "cursor-grabbing" : "cursor-grab"
                      } cursor-pointer pl-2`}
                    >
                      <IconGripVertical size={25} stroke={"gray"} />
                    </div>
                    <div
                      className={`cursor-pointer p-4 pt-5 ${
                        todo.completed &&
                        "line-through decoration-4 text-gray-500"
                      } transition-colors duration-500`}
                      onClick={() =>
                        handleDone({ ...todo, completed: !todo.completed })
                      }
                      dangerouslySetInnerHTML={{
                        __html: marked.parse(todo.text),
                      }}
                    />
                  </div>
                  <div className="flex flex-row p-4 min-h-25 min-w-25 shrink-0">
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
              </Reorder.Item>
            ))
          ) : (
            <EmptyRow />
          )}
        </Reorder.Group>
      </ul>
    </div>
  );
};
