import Image from "next/image";
import { Typography } from "../dizzy/Typography";
import { marked } from "marked";
import DOMpurify from "dompurify";
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
    <tr>
      <td className="px-10 border text-center" colSpan={2}>
        Add A Todo
      </td>

      <td className="px-10 py-5 border text-center">
        <span className="text-green-500">🫥</span>
      </td>
    </tr>
  );
}

export const Table: React.FC<TTableProps> = ({
  todos,
  handleDone,
  deleteTodo,
}) => {
  return (
    <div className="table-container">
      <table className="border w-full">
        <thead className="border text-xl">
          <tr className="border">
            <th className="px-10 py-5">
              <Typography as="h4" color="neutral700" bold>
                Todo
              </Typography>
            </th>
            <th className="px-10 py-5">
              {" "}
              <Typography as="h4" color="neutral700" bold>
                Completed
              </Typography>
            </th>
            <th className="px-10 py-5">
              {" "}
              <Typography as="h4" color="neutral700" bold>
                Delete
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody className="text-lg">
          {todos.length ? (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td
                  className={`px-10 border ${
                    todo.completed && "line-through decoration-4 text-gray-200"
                  } transition-all duration-500 `}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(todo.text),
                    }}
                  ></div>
                </td>
                <td
                  className="px-10 py-5 border text-center"
                  onClick={() => handleDone(todo)}
                >
                  {todo.completed ? (
                    <span className="text-green-500 cursor-pointer">✅</span>
                  ) : (
                    <span className="text-red-500 cursor-pointer">❌</span>
                  )}
                </td>
                <td className="px-10 py-5 border text-center ">
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
                </td>
              </tr>
            ))
          ) : (
            <EmptyRow />
          )}
        </tbody>
      </table>
    </div>
  );
};
