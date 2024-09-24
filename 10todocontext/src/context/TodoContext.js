import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todotitle: "todo msg",
            Completed:false
        }
    ],
    addTodo: (id) =>{},
    updateTodo: (id, todotitle) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
})



export const useTodo = () =>{
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider
