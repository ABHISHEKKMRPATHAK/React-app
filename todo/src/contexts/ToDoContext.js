import { createContext,useContext } from "react";

export  const ToDoContext  = createContext({});

export const ToDo = () =>{
    useContext(ToDoContext)
}