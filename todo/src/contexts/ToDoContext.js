import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Lern React",
      completed: "false",
    },
  ],
  addToDo: (todo) => {},
  deleteToDo: (id) => {},
  updateToDo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
