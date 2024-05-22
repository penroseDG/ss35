import React, { useState } from "react";

export default function FunctionComponent() {
    const [fullName, setFullName] = useState<string>("penrose");
    const [age, setAge] = useState<number>(20);
    const [isActive, setIsActive] = useState<boolean>(true);

    const handleChange = () => {
        setAge(99);
    }

    return (
        <div>
            <p>{fullName} is {age} years old</p>
            <button onClick={handleChange}>Change Age</button>
        </div>
    );
}