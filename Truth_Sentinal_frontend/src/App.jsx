import { useState,useEffect,useRef } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import MidSection from './Components/MidSection'
import Footer from './Components/Footer'
import { HashLink } from 'react-router-hash-link';


function App() {
  const appRef = useRef(null);
  const [pos,setPos] = useState({
    x : 0,y : 0
  })
  // useEffect(()=>{
  //   const mousePos = (event)=>{
  //     const winWidth = window.innerWidth
  //     const winHeight = window.innerHeight
  //     setPos({
  //       x : Math.round((event.clientX / winWidth)*100),
  //       y : Math.round((event.clientY / winHeight)*100)
  //     });
  //   }
  //   document.addEventListener("mousemove",mousePos);
  //   return function cleanup(){
  //     document.removeEventListener("mousemove",mousePos);
  //   }
  // },[]);
  // useEffect(()=>{
  //   // console.log(pos);
  //   const moveGradient = ()=>{
  //     if(appRef){
  //       appRef.current.style.setProperty('--mouse-x',pos.x.toString() + "%")
  //       appRef.current.style.setProperty('--mouse-y',pos.y.toString() + "%")
  //     }
  //   }
  //   document.addEventListener("mousemove",moveGradient);
  //   return function cleanup(){
  //     document.removeEventListener("mouseout",moveGradient);
  //   }
  // },[pos])
  return (
    <div className='app' id='app' ref={appRef} data-scroll-container>
      <div className='flex justify-center items-center' id='landing'>
        <NavBar/>
      </div>
      <div id='mid' className='flex flex-row justify-center items-center'>
        <MidSection/>
      </div>
      <div id='footer' className='flex flex-row justify-center items-center'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
