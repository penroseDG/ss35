// src/Form.jsx
import React, { useState } from 'react';
const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Submitted value:', inputValue);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nhập giá trị:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
export default Form;
