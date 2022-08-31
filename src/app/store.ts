import { configureStore} from '@reduxjs/toolkit';

import todosReducer from "../redux/todoSlice";
import modalReducer from "../redux/modalSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const selectTodos = (state:RootState) => state.todos.todos;
export const openModal = (state:RootState) => state.modal.isOpen;
