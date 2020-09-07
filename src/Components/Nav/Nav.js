import React, { useState, useEffect } from 'react';
import './Nav.css';


const Nav = () => {
    const [ show, handleShow ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }
    window.addEventListener("scroll", changeBackground)

    return (    
        <div className={show ? 'nav active' : 'nav'}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/165px-Netflix_2015_logo.svg.png"
            alt="Movie Prime logo"
            />
        </div>
    )
}

export default Nav
