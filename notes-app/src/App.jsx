import { X } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {

  // const const [state, setstate] = useState();

  const [title, setTit] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const formSubmitted = (e) => {
    e.preventDefault()

    const newTask = [...task]
    // console.log(title, detail);

    newTask.push({ title, detail })
    setTask(newTask)
    // console.log(newTask)
    // console.log(task)
    
    setTit('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyNote = [...task];
    // copyNote.splice(copyNote[idx])
    copyNote.splice(idx,1)
    setTask(copyNote)
    // console.log(copyNote[idx])
  }

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          formSubmitted(e);
        }}
        className="lg:flex justify-between gap-4 items-start font-medium"
      >
        <div className="flex flex-col w-1/2 items-start p-10">
          <h1 className="text-3xl font-bold mb-5">Add Notes</h1>

          <input
            value={title}
            onChange={(e) => {
              setTit(e.target.value);
            }}
            type="text"
            placeholder="Enter Notes Heading"
            name=""
            id=""
            className="border-2 rounded-md px-5 py-2 mx-auto mb-5 w-full outline-none font-medium"
          />

          <textarea
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
            placeholder="Write Details"
            type="text"
            name=""
            id=""
            className="border-2 rounded-md px-5 py-5  mx-auto mb-10 w-full outline-none h-32"
          ></textarea>
          <button className=" active:scale-95 mx-auto bg-white text-black px-5 py-5 rounded-md text-2xl w-full font-medium">
            Add note
          </button>
        </div>
        <div className="lg:w-1/2 lg:border-l-2 w-full h-screen p-10">
          <h1 className="text-3xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
            {
              task.map(function (elem, idx) {
                return (
                  <div
                    key={idx}
                    className="h-52 w-40 relative bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover rounded-xl py-8  px-4"
                  >
                    <div onClick={() => {
                      deleteNote(idx)
                    }} className="absolute right-3 rounded-full p-1 cursor-pointer active:scale-95  top-3 bg-red-500">
                      <X size={16} strokeWidth={2.75} />
                    </div>

                    <h2 className="text-black font-bold leading-tight text-xl">
                      {elem.title}
                    </h2>
                    <p className="leading-tight mt-4 font-medium text-gray-600">
                      {elem.detail}
                    </p>
                  </div>
                );

              })
            }
          </div>
        </div>
      </form>
    </div>
  );
}

export default App
