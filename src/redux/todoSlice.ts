import {createSlice} from "@reduxjs/toolkit";
import {IStore} from "../iterfaces/IStore";

const initialState:IStore = {
    todos: [
        {value: "first", id: 1, isDone: false, createdAt: 'Last monday'},
        {value: "second", id: 2, isDone: false, createdAt: 'Yesterday'},
        {value: "third", id: 3, isDone: false, createdAt: 'Last month'},
        {value: "fourth", id: 4, isDone: false, createdAt: 'Last friday'},
        {value: "fifth", id: 5, isDone: false, createdAt: 'Last Year'},
    ]
};


export const todoSlice = createSlice( {
    name: "todos",
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodo: (state,{payload}) => {
            const todoId = payload;
            state.todos = state.todos.filter((todo) => todo.id !== todoId);
        },
        unDone: (state,{payload}) => {

        }
    }
});


export const { addNewTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer;