import React from 'react'
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import Member from './Member';


const Footer = () => {
  const [members,setMembers] = useState([{ id: 1, name : "Devendra Kumar Tarak",pos : "Team Leader", git : "https://github.com/DevT75" },
  { id: 2, name : "Devashish Botre",pos : "Team Member", git : "https://github.com/devashishbotre" },
  { id: 3, name : "Vinay Sadhwani",pos : "Team Member", git : "https://github.com/vtg04" },
  { id: 4, name : "Ayush Kumar",pos : "Team Member", git : "https://github.com/willeynimbus" }]);
  return (
    <div className='flex flex-col justify-center w-screen h-screen items-center'>
      {/* <div className='flex flex-row justify-center items-center w-[100%] h-[30%]'>
        <h4 className='footer-heading w-[80%] h-[30%] julius-sans one-regular font-normal flex flex-row justify-center items-center'>Truth Sentinel</h4>
      </div> */}
      <div className='flex flex-col justify-center items-center w-[100%] h-[80%]'>
        <div className='relative flex flex-row justify-center items-center my-10 py-10 selection w-full h-[20%]'>
          <p className='footer-heading'>Team Details</p>
        </div>
        <div className='flex flex-col w-full items-center justify-center h-[60%]'>
          {
            members.map((m)=>(
              <Member key={m.id} name={m.name} pos = {m.pos} git={m.git}/>
            ))
          }
        </div>
      </div>
      <div className='flex flex-row justify-around items-center w-[100%] h-[30%]'>
        <span className='flex flex-row justify-center items-center gap-8 text-lg'>
          Repo Link :
          <a href='https://github.com/DevT75/HIS_Technical_Tyrants_Truth_Sentinel.git' target='_blank'>
            <FaGithub size={40}/>
          </a>
        </span>
        
        <div>Copyright @Technical_Tyrants</div>
      </div>
    </div>
  )
}

export default Footer
