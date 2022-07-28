import Image from "next/image";
import { marked } from "marked";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Down from "../../public/down.svg";
import Up from "../../public/up.svg";
export type ToDo = {
  id: number;
  text: string;
  completed: boolean;
  subTodos: ToDo[];
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
  const [dropDownRef] = useAutoAnimate<HTMLLIElement>();
  const [show, setShow] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<ToDo | null>(null);

  const handleClick = (todo: ToDo) => {
    setSelectedTodo(todo);
    setShow(!show);
  };

  function handleArrows(todo: ToDo) {
    if (todo.subTodos.length) {
      if (selectedTodo === todo && show) {
        return (
          <Image src={Up} width={20} height={20} alt="up" className="p-4" />
        );
      } else if (selectedTodo === todo && !show) {
        return (
          <Image src={Down} width={20} height={20} alt="Down" className="p-4" />
        );
      } else if (selectedTodo !== todo) {
        return (
          <Image src={Down} width={20} height={20} alt="Down" className="p-4" />
        );
      }
    }
  }

  return (
    <div className="w-full">
      <ul className="text-lg mx-auto border rounded-md w-1/2" ref={listRef}>
        {todos.length ? (
          todos
            .sort((a, b) => +a.completed - +b.completed)
            .map((todo) => (
              <>
                <li
                  key={todo.id}
                  className="flex flex-row w-full justify-between odd:bg-gray-200"
                  ref={dropDownRef}
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
                    <span
                      className="cursor-pointer p-4"
                      onClick={() => {
                        handleClick(todo);
                      }}
                    >
                      {/* {handleArrows(todo)} */}
                    </span>
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
                        className="min-h-25 min-w-25 shrink-0"
                      />
                    </button>
                  </div>
                </li>
                {/* {show &&
                  selectedTodo === todo &&
                  selectedTodo?.subTodos.map((todo) => (
                    <li key={todo.id} className=" bg-slate-200 p-4">
                      {todo.text}
                    </li>
                  ))} */}
              </>
            ))
        ) : (
          <EmptyRow />
        )}
      </ul>
    </div>
  );
};
