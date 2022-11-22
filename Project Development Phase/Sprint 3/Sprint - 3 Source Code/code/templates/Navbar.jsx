import React from 'react';
import { useNavigate } from 'react-router';
import "./navbar.css";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="navbar">
            <div className="navTitle">Personal Expense Tracker
                <span className='navSubTitle'>speak to track</span>
            </div>
            <div>
                <button className='navBtn' onClick={() => handleLogout()}>Logout</button>
            </div>
            
        </div>
    );
}


export default Navbar;