import React, {FormEvent, useState} from 'react';
import AddButton from "../Buttons/AddButton/AddButton";
import "./TodoForm.scss"
import {ITodo} from "../../iterfaces/todosInterface";
import {useDispatch} from "react-redux";
import {addNewTodo} from "../../redux/todoSlice";

function TodoForm() {
    const dispatch = useDispatch()
    const date = new Date();
    const todo: ITodo = {
        value: '',
        id: 1,
        isDone: false,
        createdAt: `${date.getHours()}:${date.getMinutes()}`
    };

    const [value, setValue] = useState<ITodo>(todo);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const text = e.target.value;
        setValue({...todo, value: text, id: Date.now()});
    };

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        setValue(todo);
        dispatch(addNewTodo(value));
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                <div className="input-upper">
                    <input type="text" id="input1" value={value.value} onChange={inputHandler}  required/>
                    <label>Name</label>
                </div>
                <AddButton/>
            </form>
        </div>
    );
}

export default TodoForm;
