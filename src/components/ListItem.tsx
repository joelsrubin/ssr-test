import { IconGripVertical, IconTrash } from "@tabler/icons";
import { marked } from "marked";
import { forwardRef } from "react";
import { ToDo } from "./List";
import { Tooltip } from "./Tooltip";

type TListItem = {
  isDragging: boolean;
  todo: ToDo;
  handleDone: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
};

const ListItem = forwardRef<ToDo | null, TListItem>(
  ({ isDragging, todo, deleteTodo, handleDone }, dragNode) => {
    return (
      <li
        className={`flex w-full flex-row justify-between border-y-2 border-gray-200 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${
          typeof dragNode !== "function" &&
          dragNode!.current === todo &&
          "z-10 bg-gray-200 opacity-50"
        } ${!isDragging && "hover:bg-gray-100"} dark:bg-black dark:text-white`}
      >
        <div className="flex flex-row">
          <div
            className={`flex items-center justify-center ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } cursor-pointer pl-2`}
          >
            <IconGripVertical size={25} color={"gray"} />
          </div>
          <div
            className={`cursor-pointer p-4 pt-5 ${
              todo.completed && "text-gray-500 line-through decoration-4"
            } transition-colors duration-500`}
            onClick={() => handleDone({ ...todo, completed: !todo.completed })}
            dangerouslySetInnerHTML={{
              __html: marked.parse(todo.text),
            }}
          />
        </div>
        <div className="min-h-25 min-w-25 flex shrink-0 flex-row p-4">
          <button className="cursor-pointer" onClick={() => deleteTodo(todo)}>
            <IconTrash className="min-h-25 min-w-25 dark:white shrink-0 duration-200 hover:scale-110" />
          </button>
        </div>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
export default ListItem;
