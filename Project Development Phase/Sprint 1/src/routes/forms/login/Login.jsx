import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import swal from 'sweetalert';
import FormInput from '../formInput/FormInput';
import './login.css';

const Login = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const { username, password } = values;

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special characters",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();        

        if (username === "aaaa" && password === "aaaa@1111") {
            swal("Successfull Login", "Welcome to Dashboard", "success");
            navigate(`/dashboard/${username}`);
        }
        else {
            swal("Wrong Credentials", "Please try again!", "error");
        }
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <h1 className="loginTitle">Login</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]} onChange={onChange}
                    />
                ))}

                <button className="loginBtn" >Login</button>
                <div>
                    <p style={{ fontSize: "14px", marginBottom: "30px" }}>New user? <Link to="/register" className="registerLink">Click to Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;