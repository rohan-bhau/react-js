import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    console.log(data);
    
  }

  const getData2 = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
    
  }

  const [data, setData] = useState([]);
  const getData3 = async () => {
    
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data)
    console.log(response.data)
  }

  return (
    <div>
      <button className='counter' onClick={getData}>Get Data</button> <br />
      <button className='counter' onClick={getData2}>Get Data 2</button> <br />
      <button className='counter' onClick={getData3}>Get Data 3</button>
      <div>
        {
          data.map(function () {
            return <h2>hello</h2>
          })
        }
      </div>
    </div>
  )
}

export default App
