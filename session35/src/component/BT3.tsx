import React, { useState } from 'react';

const ChangeColor = () => {
  const [textColor, setTextColor] = useState('black');
  const changeTextColor = () => {
    if (textColor === 'black') {
      setTextColor('blue');
    } else {
      setTextColor('black');
    }
  };
  return (
    <div>
      <p style={{ color: textColor }}>Màu chữ thay đổi!</p>
      <button onClick={changeTextColor}>Thay đổi màu chữ</button>
    </div>
  );
};

export default ChangeColor;
