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
        className={`flex flex-row w-full justify-between border-y-2 border-gray-200 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${
          typeof dragNode !== "function" &&
          dragNode!.current === todo &&
          "bg-gray-200 opacity-50 z-10"
        } ${!isDragging && "hover:bg-gray-100"} dark:bg-black dark:text-white`}
      >
        <div className="flex flex-row">
          <div
            className={`flex justify-center items-center ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } cursor-pointer pl-2`}
          >
            <IconGripVertical size={25} color={"gray"} />
          </div>
          <div
            className={`cursor-pointer p-4 pt-5 ${
              todo.completed && "line-through decoration-4 text-gray-500"
            } transition-colors duration-500`}
            onClick={() => handleDone({ ...todo, completed: !todo.completed })}
            dangerouslySetInnerHTML={{
              __html: marked.parse(todo.text),
            }}
          />
        </div>
        <div className="flex flex-row p-4 min-h-25 min-w-25 shrink-0">
          <button className="cursor-pointer" onClick={() => deleteTodo(todo)}>
            <IconTrash className="min-h-25 min-w-25 shrink-0 hover:scale-110 duration-200 dark:white" />
          </button>
        </div>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
export default ListItem;
