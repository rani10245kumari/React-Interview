import React, { useState } from "react";
function USESTATE() {
    const [count, setCount] = useState(0)
    const Add = () => {
        setCount(count + 1)
    }
    const Sub = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h2>Count value is :{count}</h2>
            <button onClick={Add}>Incerement</button>
            <button onClick={Sub}>Decrement </button>
        </>
    )
} export default USESTATE