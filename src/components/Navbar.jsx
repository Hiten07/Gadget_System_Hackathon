import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
    const [currantPage, setCurrantPage] = useState(window.location.pathname);

    const isLogin = true;

    useEffect(() => {
        setCurrantPage(window.location.pathname);
    }, [currantPage])

    return (
        <nav className="navbar-container">
            <div className='navbar'>
                <div className="logo">
                    <h1><Link to="/">MGS</Link></h1>
                </div>
                {isLogin ? (
                    <ul className='navbar-link'>
                        <li><Link to="/notification" className={currantPage === '/register' ? "active-link" : ""} onClick={() => setCurrantPage("/register")}><li className='material-symbols-outlined' >Notifications_Active</li></Link></li>
                        <li><Link to="/profile" className={currantPage === '/login' ? "active-link" : ""} onClick={() => setCurrantPage("/login")}><li className='material-symbols-outlined' >Person</li></Link></li>
                    </ul>
                ) : (
                    <ul className='navbar-link'>
                        <li><Link to="/register" className={currantPage === '/register' ? "active-link" : ""} onClick={() => setCurrantPage("/register")}>Registration</Link></li>
                        <li><Link to="/login" className={currantPage === '/login' ? "active-link" : ""} onClick={() => setCurrantPage("/login")}>Login</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar
