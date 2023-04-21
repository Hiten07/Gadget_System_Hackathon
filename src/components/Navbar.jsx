import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
    const [currantPage, setCurrantPage] = useState(window.location.pathname);

    useEffect(() => {
        setCurrantPage(window.location.pathname);
    }, [currantPage])
    return (
        <nav className='navbar container'>
            <div className="logo">
                <h1><Link to="/">MGS</Link></h1>
            </div>
            <ul className='navbar-link'>
                <li><Link to="/register" className={currantPage === '/register' ? "active-link" : ""}>Registration</Link></li>
                <li><Link to="/login" className={currantPage === '/login' ? "active-link" : ""}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
