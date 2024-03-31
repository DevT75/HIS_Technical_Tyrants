import React from 'react'
import { useState } from 'react'
import '../index.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import axios from 'axios';


const MidSection = () => {
  const [image,setImage] = useState(null);
  const [filename,setFilename] = useState("No file selected!");
  const [file,setFile] = useState(null);
  const handleSubmit = async(e)=>{
    const formData = new FormData();
    formData.append(
      "file",
      file,
      file.name
    );
    const requestOptions = {
      method : 'POST',
      body: formData
    }
    // const { data } = await axios.post(
    //   "http://127.0.0.1:8000/",
    //   {
    //     method: 'POST',
    //     body: formData
    //   }
    // )
    fetch("http://127.0.0.1:8000/upload",requestOptions)
    .then(response => response.json())
    .then((res)=>{console.log(res)});
  }
  return (
    <div className='-mt-10 flex flex-col justify-center items-center h-screen w-screen'>
      <form action='' onClick={()=>document.querySelector('.input-field').click()} className='block'>
        <input type='file' accept='.jpg' className='input-field' hidden
          onChange={({target : { files }})=>{
            if(files[0]){
              setFilename(files[0].name);
              setFile(files[0]);
            }
            if(files) setImage(URL.createObjectURL(files[0]))
          }}
        />
        {
          image ?
          <img className = 'relative w-[95%] h-[90%]' src={image} alt={filename}/>
          :
          <MdCloudUpload color = '#04678b' size={60}/>}
          <p className='button-txt'>Browser Files to Upload</p>
      </form>
      <section className='mx-2 mt-2 mb-0 px-4 py-4 w-[60%] h-[8%]
       flex flex-row justify-between items-center bg-white border-2 border-black'>
        <AiFillFileImage color='#04678b'/>
        <span className='w-[70%] text-black button-txt'>
          { filename }</span>
          <MdDelete onClick={()=>{
            setFilename("No file selected!");
            setImage(null);
          }} size={30} color='#04678b'/>
      </section>
      <button className='button mt-4' onClick={handleSubmit}>
        <p className='button-txt'>GO</p>
      </button>
    </div>
  )
}

export default MidSection
