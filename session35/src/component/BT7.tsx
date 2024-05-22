import React, { useState } from 'react';
const CountText = () => {
    const [inputValue, setInputValue] = useState('');
    const [charCount, setCharCount] = useState(0);
    const handleInputChange = (e: { target: { value: any[] | React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
        setCharCount(e.target.value.length);
    };
    return (
        <div>
            <h3>Tạo component <CountText /></h3>
            <p>Sử dụng các kiến thức đã học về event, react hook để thực hiện yêu cầu</p>
            <div>
                <label>Yêu cầu:</label>
                <div>
                    <textarea
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Nhập dữ liệu"
                    />
                </div>
                <div>
                    Số ký tự: {charCount}
                </div>
            </div>
        </div>
    );
};
export default CountText;