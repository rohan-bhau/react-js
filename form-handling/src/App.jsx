import React from 'react'
import { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by", input);
    
    setInput('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
