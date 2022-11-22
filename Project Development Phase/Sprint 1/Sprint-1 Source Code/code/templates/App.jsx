import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from './routes/dashboard/Dashboard';
import Home from './routes/home/Home';
import Login from './routes/forms/login/Login';
import Register from './routes/forms/register/Register';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/dashboard/:uname" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;