import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async() => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data)
    // console.log(userData);
    
  }

  useEffect(function () {
    getData()
  },[index])


  let printUserData = (
    <h3 className="font-xs text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className="bg-black mx-auto">
          <a href={elem.url} target='_blank'>
            <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
              <img
                src={elem.download_url}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h2 className='text-lg font-bold'>{elem.author}</h2>
          </a>
        </div>
      );
    })
  }

  return (
    <div className="bg-black h-screen  overflow-auto flex flex-col">
      <div className="flex  flex-wrap gap-5  p-10 mx-auto bg-black">
        {printUserData}
      </div>
      <div className="flex  justify-center  gap-4 mb-10">
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
            setUserData([])
          }
        }}
          className="btn btn-warning">
          Prev
        </button>
        <h1 className="font-bold bg-red-600 py-1 px-3 rounded text-lg">{index}</h1>
        <button onClick={() => {
          if (index < 34) {
            setIndex(index + 1);
             setUserData([]);
          }
          
        }} className="btn btn-warning">
          Next
        </button>
      </div>
    </div>
  );
}

export default App
