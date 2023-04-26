import React from 'react'
import "./styles/sidebar.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const screenSize = window.innerWidth;
    return (
        <div className='sidebar'>
            <Link to={'/'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Dashboard</li>
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link to={'/search'}>
                <div className="sidebar-link">
                    <li className="material-symbols-outlined">search</li>
                    <span>Search Product</span>
                </div>
            </Link>
            <Link to={'/add-product'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Add_Circle</li>
                    <span>Create Product</span>
                </div>
            </Link>
            <Link to={'/sell-purchase'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Qr_Code_Scanner</li>
                    <span>sell & Purchase</span>
                </div>
            </Link>
            <Link to={'/setting'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Settings</li>
                    <span>Setting</span>
                </div>
            </Link >
            <Link to={'/account'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Account_Balance_Wallet</li>
                    <span>Account</span>
                </div>
            </Link >
            <Link to={'/logout'} className='logout'>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Logout</li>
                    <span>Logout</span>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
