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
                    {screenSize > 768 && <span>Dashboard</span>}
                </div>
            </Link>
            <Link to={'/search'}>
                <div className="sidebar-link">
                <li className="material-symbols-outlined">search</li>
                    {screenSize > 768 && <span>Search Product</span>}
                </div>
            </Link>
            <Link to={'/add-product'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Add_Circle</li>
                    {screenSize > 768 && <span>Create Product</span>}
                </div>
            </Link>
            <Link to={'/sell-purchase'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Qr_Code_Scanner</li>
                    {screenSize > 768 && <span>sell & Purchase</span>}
                </div>
            </Link>
            <Link to={'/setting'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Settings</li>
                    {screenSize > 768 && <span>Setting</span>}
                </div>
            </Link >
            <Link to={'/account'}>
                <div className="sidebar-link">
                    <li className='material-symbols-outlined' >Account_Balance_Wallet</li>
                    {screenSize > 768 && <span>Account</span>}
                </div>
            </Link >
            {screenSize > 768 && (
                <Link to={'/logout'}>
                    <div className="sidebar-link">
                        <li className='material-symbols-outlined' >Logout</li>
                        <span>Logout</span>
                    </div>
                </Link>
            )}

        </div>
    )
}

export default Sidebar
