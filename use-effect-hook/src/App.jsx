import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)   
  const [num2, setNum2] = useState(100)

  useEffect(function () {
    console.log('Use Effect is running...');
    
  },[num])

  return (
    <div>
      <h1>num1: {num}</h1>
      <h1>num2: {num2}</h1>
      <button
        onClick={() => {
          setNum2(num2 + 50);
        }}
        onDoubleClick={() => {
          setNum(num + 1);
        }}
        className="counter"
      >
        Click
      </button>
    </div>
  );
}

export default App
