import { useCallback, useEffect, useRef, useState } from "react";

import { Input } from "./Input";
import { Reorder } from "framer-motion";

import { TListItem } from "../pages";
import { emojiObj } from "../constants";
import ListItem from "./ListItem";
import { SyncLoader } from "react-spinners";
import { styleObj } from "../constants";

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
  isDarkMode: boolean;
  updatePrioritiesAsync: (data: { id: string; priority: number }[]) => void;
  colorMode: string | undefined;
  isLoading: boolean;
};

function EmptyRow({ colorMode }: { colorMode: string | undefined }) {
  return (
    <li className="flex flex-row justify-between">
      <div className="px-4 py-5 text-center dark:text-gray-500">
        <i>empty list!</i>
      </div>
      <div className="px-10 py-5 text-center">
        <span className="text-xl">
          <h1>{emojiObj[colorMode!]}</h1>
        </span>
      </div>
    </li>
  );
}

function LoadingRow({ colorMode }: { colorMode: string | undefined }) {
  return (
    <li className="flex flex-row justify-between">
      <div className="px-4 py-5 text-center dark:text-gray-500">
        <i>loading...</i>
      </div>
      <div className="px-10 py-5 text-center">
        <span className="text-xl">
          <SyncLoader
            color={styleObj[colorMode!]}
            size={8}
            cssOverride={{ opacity: 0.5 }}
          />
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
  isDarkMode,
  colorMode,
  isLoading,
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

  const dragNode = useRef<ToDo | null>(null);

  const updatePriority = useCallback(async () => {
    dragNode.current = null;
    const idsWithPriority = sortableList.map((todo, i) => {
      return { id: todo.id, priority: i, text: todo.text };
    });

    updatePrioritiesAsync(idsWithPriority);
    setIsDragging(false);
  }, [sortableList, updatePrioritiesAsync]);

  return (
    <div className="w-full flex flex-col items-center h-3/4 max-h-3/4 select-none justify-center">
      <ul className="text-lg mx-auto border rounded-md w-3/4 md:w-1/2 sm:w-1/2 lg:w-1/2 overflow-auto shadow-md gap-2 dark:shadow-sm dark:shadow-slate-100 ">
        <li>
          <Input
            slug={slug}
            setList={setList}
            list={list}
            todos={todos}
            isDarkMode={isDarkMode}
          />
        </li>
        {isLoading ? (
          <LoadingRow colorMode={colorMode} />
        ) : (
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
                  <ListItem
                    isDragging={isDragging}
                    todo={todo}
                    handleDone={handleDone}
                    deleteTodo={deleteTodo}
                    ref={dragNode}
                  />
                </Reorder.Item>
              ))
            ) : (
              <EmptyRow colorMode={colorMode} />
            )}
          </Reorder.Group>
        )}
      </ul>
    </div>
  );
};
