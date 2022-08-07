import { ToDo } from "../components/List";

export async function getTodos(slug: string | undefined | string[]) {
  const response = await fetch(`/api/get-todos/${slug}`);
  return await response.json();
}
export async function deleteTodo(todo: ToDo) {
  const updatedTodos = await fetch(`/api/delete-todo/${todo.id}`);
  return await updatedTodos.json();
}

export async function updateTodo({ id, completed }: ToDo) {
  const updated = await fetch(`/api/update-todo/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
  return await updated.json();
}

export function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
}
