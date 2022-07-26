import Image from "next/image";
import { Typography } from "../dizzy/Typography";
import { marked } from "marked";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export type ToDo = {
  id: string;
  text: string;
  completed: boolean;
};

type TTableProps = {
  children?: React.ReactNode;
  handleDone: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
  todos: ToDo[];
};

function EmptyRow() {
  return (
    <li className="flex flex-row">
      <div className="px-10 py-5 text-center">Add A Todo</div>

      <div className="px-10 py-5 text-center">
        <span className="text-green-500">🫥</span>
      </div>
    </li>
  );
}

export const Table: React.FC<TTableProps> = ({
  todos,
  handleDone,
  deleteTodo,
}) => {
  const [listRef] = useAutoAnimate<HTMLUListElement>();
  return (
    <div>
      <ul className="text-lg mx-auto w-full" ref={listRef}>
        {todos.length ? (
          todos.map((todo) => (
            <li key={todo.id} className="flex flex-row w-full justify-between">
              <div
                className={`cursor-pointer ${
                  todo.completed && "line-through decoration-4 text-gray-200"
                } transition-colors duration-500 `}
                onClick={() => handleDone(todo)}
              >
                <div
                  className="pr-20 py-2"
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(todo.text),
                  }}
                ></div>
              </div>

              <div className="py-2">
                <button
                  className="cursor-pointer"
                  onClick={() => deleteTodo(todo)}
                >
                  <Image
                    src="/trashcan.svg"
                    alt="delete"
                    height={25}
                    width={25}
                  />
                </button>
              </div>
            </li>
          ))
        ) : (
          <EmptyRow />
        )}
      </ul>
    </div>
  );
};
