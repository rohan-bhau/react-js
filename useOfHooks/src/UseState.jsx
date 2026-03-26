import React from 'react'
import { useState } from 'react'
// import styles from './App.css'

const UseState = () => {
    const [num, setNum] = useState(0)

    const changeNum = () => {
        setNum(num + 1);

    }


    const [Num2, setNum2] = useState(0)

    const increaseNumber = () => {
        setNum2(Num2+1)
        
    }
    const decreaseNumber = () => {
        setNum2(Num2-1)
        
    }
    const resetNumber = () => {
        setNum2(0)
        
    }


  return (
    <div>
      <div>
        <h1>Counter: {num}</h1>
        <button onClick={changeNum} className="counter">
          click
        </button>
      </div>

      <div id='numberChange'>
        <h1 className="h1">{Num2}</h1>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={increaseNumber} className="counter">
            Increase
          </button>
          <button onClick={resetNumber} className="counter">
            Reset
          </button>
          <button onClick={decreaseNumber} className="counter">
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseState
