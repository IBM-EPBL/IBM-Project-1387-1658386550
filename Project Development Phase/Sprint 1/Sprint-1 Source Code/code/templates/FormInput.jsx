import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);

    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label className="labelField">{label}</label>
            <input
                {...inputProps}
                className="inputField"
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()} />
            <span className="errorMessage">{errorMessage}</span>
        </div>
    );
};

export default FormInput;