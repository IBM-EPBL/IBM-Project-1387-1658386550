import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


const Home = () => {
    return (
        <div className="homeContainer">
            <Link to="/login"><button className="homeBtn">Login</button></Link>
            <Link to="/register"><button className="homeBtn">Register</button></Link>
        </div>
    );
};




export default Home;
