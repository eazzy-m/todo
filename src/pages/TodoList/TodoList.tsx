import React from 'react';
import {useSelector} from "react-redux";
import {selectTodos} from "../../app/store";
import "./TodoList.scss"
import TodoItem from "../TodoItem/TodoItem";


function TodoList() {
    const todos = useSelector(selectTodos);

    return (
        <div className="todo-list">
            {todos.map((todo, index) =>
                <TodoItem key={todo.id} todosProperties={todo} number={index + 1}/>
            )}
        </div>
    );
}

export default TodoList;