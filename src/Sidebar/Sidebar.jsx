import React from 'react';
import { Link } from 'react-router-dom';
import css from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div >
        <div><Link to="/profile">Profile</Link></div>
        <div><Link to="/messages">Messages</Link></div>
        <div><Link to="/friends">Friends</Link></div>
        
        </div>
    )
}

export default Sidebar