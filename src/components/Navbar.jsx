import React from 'react'
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
    return (
        <nav className='navbar container'>
            <div className="logo">
                <h1><Link to="/">MGS</Link></h1>
            </div>
            <ul className='navbar-link'>
                <li><Link to="/register">Registration</Link></li>
                <li><Link to="/register">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
