// Buat component counter
import React from "react";
import { useState } from "react";
import '../App.css';

const Counter = () => {
    const [number,setCounter] = useState(0)

    const numberInc = () => {
        setCounter (number + 1)
    }

    const numberDec = () => {
        if (number <= 0) {
            setCounter(number)
        }
        else {
            setCounter (number - 1)
        }

    }

    return (
        <div>
            Counter App
            <div>
                {number}
            </div>
            <div>
                <button onClick={numberDec}>-</button>&nbsp;&nbsp;
                <button onClick={numberInc}>+</button>
            </div>

        </div>
    )
}

export default Counter;