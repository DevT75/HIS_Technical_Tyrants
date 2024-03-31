import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Member = ({ name, pos, git }) => {
  return (
    <div className='w-[70%] h-[15%] p-4 m-4 gap-6 rounded-md flex flex-row justify-center items-center border-2 border-black bg-white'>
        <div className='w-[40%] text-black flex justify-around font-medium text-md'>{ name }</div>
        <div className='w-[40%] text-black flex justify-around'>{ pos }</div>
        <div className='w-[20%] text-black flex justify-center'>
            <a href={git} target='_blank'>
                <FaGithub size={30}/>
            </a>
        </div>
    </div>
  )
}

export default Member
