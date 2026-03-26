import React from 'react'

const RightCardContent = ({user}) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center font-bold text-xl">
        {user.id}
      </h2>
      <div>
        <p className="text-lg text-white mb-10 text-shadow-2xs">
          {user.description}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white   px-4 py-1 rounded-full font-medium">
            {user.tag}
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium ">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent
