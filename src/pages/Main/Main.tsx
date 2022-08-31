import React from 'react';
import "./Main.scss"
import TodoList from "../TodoList/TodoList";
import TodoForm from "../../components/form/TodoForm";
import Modal from "../Modal/Modal";
import {openModal} from "../../app/store";
import {useSelector} from "react-redux";


function Main() {

    const modal = useSelector(openModal);
    console.log(modal)
    return (
        <main className="main">
            <TodoForm/>
            {modal && <Modal/>}
            <TodoList/>
        </main>
    );
}

export default Main;