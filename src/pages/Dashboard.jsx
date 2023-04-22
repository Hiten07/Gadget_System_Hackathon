import React from 'react'
import Sidebar from '../components/Sidebar'
import "./styles/dashboard.css"

const Dashboard = () => {
    return (
        <div className='dashboard admin-container'>
            <Sidebar />
            <div className="main-content-container">
                Dashboard
            </div>
        </div>
    )
}

export default Dashboard
