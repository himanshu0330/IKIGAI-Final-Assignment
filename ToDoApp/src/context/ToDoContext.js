// we are not getting any kinda component as outcome from this file thats 
// why we have used .JS rather than .JSX
// CONTEXT API is used to pass data from one component to another component
// without passing it through each component manually
// CONTEXT API is used to avoid PROPS DRILLING
// IT IS DONE BY CREATING A CONTEXT AND PROVIDING IT TO THE COMPONENTS
// WHICH NEEDS IT
//  WE CAN USE CONTEXT API IN TWO WAYS
// 1. USING CONTEXT API HOOKS WITH EXAMPLES
// 2. USING CONTEXT API CONSUMER WITH EXAMPLES
// CONTEXT API HOOKS
// 1. createContext() is used to create a context
// 2. useContext() is used to use the context
// 3. Provider is used to provide the context to the components
// 4. Consumer is used to consume the context from the provider
// 5. we can use multiple context in a single component
// 6. we can also use multiple provider in a single component
// EXAMPLE


import { useContext , createContext } from "react";

export const ToDoContext = createContext({//we are making this context to be used in 
    // other components for transferring data such as todos and functions
    todos: [// this todo defines main todo list which is used to store all the todos
        {
            id:1,// this id is used to uniquely identify the todos  
            todo: "Learn React",// this todo is used to store the todo
            completed: false// this completed is used to store the status of the todo
        }
    ],
    addToDo: (todo) => {},// this addToDo is used to add the todo to the todo list
    updateTodo:(id,todo)=>{},// this updateTodo is used to update the todo in the todo list
    deleteTodo:(id)=>{},// this deleteTodo is used to delete the todo from the todo list
    toggleComplete:(id)=>{}// this toggleComplete is used to toggle the status of the todo
    // the toggle here means to change the status of the todo from completed to not completed


});

export const useToDo = () => {// this useToDo is used to use the context in the components
    return useContext(ToDoContext)// this return is used to return the various data such as 
}// todos, addToDo, updateTodo, deleteTodo, toggleComplete

export const ToDoProvider = ToDoContext.Provider// this ToDoProvider is used to provide the context to the components