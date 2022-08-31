import React from 'react';
import {useDispatch} from "react-redux";
import {closeModal} from "../../redux/modalSlice";
import "./Modal.scss"

function Modal() {
    const dispatch = useDispatch()

    const close = () => {
        dispatch(closeModal(propsToModalState))
    }

    const propsToModalState = false
    return (
        <div className="modal">
            <div className="window">
                <button type={"button"} onClick={close}>X</button>
            </div>

        </div>
    );
}

export default Modal;
