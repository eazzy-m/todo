import React, {useState} from 'react';
import "./Header.scss"
import {useSelector} from "react-redux";
import {selectTodos} from "../../app/store";

function Header() {
    const count = useSelector(selectTodos);

    return (
        <header className="header">
            <div className="todos-counter">
                {count.length}
            </div>
            {/*modal*/}
            <div className="calendar-container">

            </div>
        </header>
    );
}

export default Header;