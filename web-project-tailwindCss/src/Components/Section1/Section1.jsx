import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  // console.log(users.users);
  
  return (
    <div className='h-screen w-full'>
          <Navbar></Navbar>
          <Page1Content  users={props.users}></Page1Content>
    </div>
  )
}

export default Section1
