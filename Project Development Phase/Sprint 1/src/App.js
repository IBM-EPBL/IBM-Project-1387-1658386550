import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
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
            </Routes>
        </BrowserRouter>
    );
};

export default App;