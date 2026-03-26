import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = ({user}) => {
    // console.log(props);
    
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img
        className="w-full h-full object-cover"
        src={user.img}
        alt=""
      />
        <RightCardContent key={user.id} user={user}></RightCardContent>
    </div>
  );
}

export default RightCard
