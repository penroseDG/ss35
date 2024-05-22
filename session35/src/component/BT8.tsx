import React, { useState } from 'react';
export default function SelectOption() {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        console.log("giá trị người dùng chọn", value);
    };
    return (
        <div>
            <label htmlFor="superhero-select">SelectOption</label>
            <select id="superhero-select" onChange={handleChange} value={selectedValue}>
                <option value="">chọn 1 siêu nhân để dí</option>
                <option value="1">siêu nhân đỏ</option>
                <option value="2">siêu nhân xanh</option>
                <option value="3">siêu nhân vàng</option>
                <option value="4">siêu nhân hồng</option>
                <option value="5">siêu nhân đen</option>
            </select>
        </div>
    );
}
