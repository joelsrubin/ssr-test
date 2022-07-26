import Image from "next/image";
import { marked } from "marked";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export type ToDo = {
  id: number;
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
    <li className="flex flex-row justify-between">
      <div className="px-10 py-5 text-center">Add A Todo</div>
      <div className="px-10 py-5 text-center">
        <span>🫥</span>
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
    <div className="w-screen">
      <ul className="text-lg mx-auto w-1/4 border rounded-md" ref={listRef}>
        {todos.length ? (
          todos
            .sort((a, b) => +a.completed - +b.completed)
            .map((todo) => (
              <li
                key={todo.id}
                className="flex flex-row w-full justify-between odd:bg-slate-200"
              >
                <div
                  className={`cursor-pointer p-4 ${
                    todo.completed && "line-through decoration-4 text-gray-500"
                  } transition-colors duration-500 `}
                  onClick={() => handleDone(todo)}
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(todo.text),
                  }}
                />

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
                      className="min-h-25 min-w-25 shrink-0"
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
