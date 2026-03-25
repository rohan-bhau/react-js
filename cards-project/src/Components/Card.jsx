import React from 'react';
import { Bookmark } from 'lucide-react'


export default function Card({ job }) {
    console.log(job);
    
// brandLogo: "https://example.com/logos/google.png",
//       companyName: "Google",
//       datePosted: "5 days ago",
//       tag1: "Full Time",
//       tag2: "Senior Level",
//       pay: "$120,000",
//       location: "Mountain View, CA",

 return (
   <div className="card">
     <div className="top">
       <div className="img-wrap">
         <img
           src={job.brandLogo}
           alt={job.companyName}
         />
       </div>
       <button>
         Save <Bookmark size={12} />
       </button>
     </div>

     <div className="center">
       <h3>
         {job.companyName}
         <span> {job.datePosted}</span>
       </h3>
       <h2>{job.role}</h2>
       <div className="levels">
         <button>{job.tag1}</button>
         <button>{job.tag2}</button>
       </div>
     </div>

     <div className="bottom">
       <div className="left">
         <h3>{job.pay}</h3>
         <p>{job.location}</p>
       </div>
       <div className="right">
         <button>Apply Now</button>
       </div>
     </div>
   </div>
 );
}