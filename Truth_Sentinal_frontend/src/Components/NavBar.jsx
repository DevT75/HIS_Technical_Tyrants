import React from 'react'
import '../index.css'

const NavBar = () => {
  return (
    <div className='flex flex-col justify-around items-center text-white w-screen h-screen m-0 relative'>
        <div className='relative flex flex-col justify-around items-center p-4 mt-4 w-full h-[60%]'>
            <h2 className='heading-text'>Truth Sentinel</h2>
            <div className = 'h-[30%] w-full items-center justify-center'><p className='button-txt text-center' id='tagline'>A platform to detect fake images including deep fakes & fake news</p></div>
        </div>

        <div className='flex flex-row justify-around -mt-8 w-[80%] h-[20%]'>
            <div className=''>
                <button className='button p-2'><p className='button-txt'>Deep Fake Detection</p></button>
            </div>
            <div className=''>
                <button className='button p-2'><p className='button-txt'>Fake News Detection</p></button>
            </div>
        </div>
    </div>
  )
}

export default NavBar