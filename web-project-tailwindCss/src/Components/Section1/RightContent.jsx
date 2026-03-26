import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  console.log(props);
  

  return <div id='right' className="h-full w-2/3 flex flex-nowrap gap-10  overflow-x-auto p-6">
    {
      props.users.map(user=><RightCard key={user.id} user={user}></RightCard>)
   }
  </div>;
}

export default RightContent
