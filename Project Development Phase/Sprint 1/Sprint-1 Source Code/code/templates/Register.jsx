import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../formInput/FormInput';
import swal from 'sweetalert';
import './register.css';

const Register = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { username } = values;

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
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be a valid email address",
            required: true,
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
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Passwords don't match",
            required: true,
            pattern: values.password,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
            swal("Successfully Registered", "Please Login", "success");
            navigate(`/login`);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <h1 className="registerTitle">Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]} onChange={onChange}
                    />
                ))}

                <button className="registerBtn">Submit</button>
                <div>
                    <p style={{ fontSize: "14px", marginBottom: "30px" }}>Already have an account? <Link to="/login" className="loginLink">Click to Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;