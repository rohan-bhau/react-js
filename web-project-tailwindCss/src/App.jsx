import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import { Tag } from 'lucide-react'

const App = () => {
  const users = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Prime customers, that have access tc bank credit and are satisfied with the current product",
      tag: "Satisfied",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Prime customers, that have access tc bank credit and are not satisfied with the current service",
      tag: "Underserved",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users}></Section1>
      <Section2></Section2>
    </div>
  );
}

export default App
