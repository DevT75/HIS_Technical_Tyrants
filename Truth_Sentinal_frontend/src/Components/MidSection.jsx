import React from 'react'
import { useState } from 'react'
import '../index.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';


const MidSection = () => {
  const [image,setImage] = useState(null);
  const [filename,setFilename] = useState("No file selected!");
  return (
    <div className='-mt-4 flex flex-col justify-center items-center h-screen w-screen'>
      <form action='' onClick={()=>document.querySelector('.input-field').click()} className='block'>
        <input type='file' accept='image/*' className='input-field' hidden
          onChange={({target : { files }})=>{
            files[0] && setFilename(files[0].name);
            if(files) setImage(URL.createObjectURL(files[0]))
          }}
        />
        {
          image ?
          <img className = 'z-2 relative w-[95%] h-[90%]' src={image} alt={filename}/>
          :
          <MdCloudUpload color = '#04678b' size={60}/>
        }
      </form>
      <section className='mx-2 mt-2 mb-0 px-4 py-4 w-[60%] h-[8%]
       flex flex-row justify-between items-center bg-white'>
        <AiFillFileImage color='#04678b'/>
        <span className='w-[70%] text-black'>
          { filename }</span>
          <MdDelete onClick={()=>{
            setFilename("No file selected!");
            setImage(null);
          }} size={30} color='#04678b'/>
      </section>
    </div>
  )
}

export default MidSection
