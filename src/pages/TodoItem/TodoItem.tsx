import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./TodoItem.scss"
import {ITodo} from "../../iterfaces/todosInterface";
import {removeTodo} from "../../redux/todoSlice";
import {openModal} from "../../redux/modalSlice";

function TodoItem(props: ({todosProperties: ITodo, number: number})) {
    const dispatch = useDispatch();

    const {value, id, isDone, createdAt} = props.todosProperties;
    const number = props.number;

    const [done, setDone] = useState<boolean>(isDone);

    const handlerChecked = (id: number): void => {
        setDone(!done);
        //dispatch(removeTodo(id));
        dispatch(openModal(!done))
    };

    // textDecoration: " line-through"


    return (
        <div className="todo-item">
            <span className="number">{number})</span>
            <label className="input__label">
                <input checked={done} className="form__input form__input_type_checkbox" type="checkbox" onChange={() => handlerChecked(id)}/>
                <span className="checkbox-label"> Done?</span>
            </label>
            <span className="todos-text" style={done ? {} : {}}>{value}</span>
            <span className="created-at">{createdAt}</span>
        </div>
    );
}

export default TodoItem;