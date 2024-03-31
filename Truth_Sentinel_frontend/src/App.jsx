import { useState,useEffect,useRef } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import MidSection from './Components/MidSection'
import Footer from './Components/Footer'
import { HashLink } from 'react-router-hash-link';
import { document } from 'postcss'

function App() {
  const appRef = useRef(null);
  const toRef = useRef(null);
  const [isDrawing,setIsdrawing] = useState(false);
  useEffect(()=>{
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const context = appRef.current;
    const moveGradient = (event)=>{
        if(isDrawing){
            const mouseX = Math.round((event.pageX / winWidth)*100)
            const mouseY = Math.round((event.pageY / winHeight)*100)
            if(appRef){
              context.style.setProperty('--mouse-x',mouseX.toString() + "%")
              context.style.setProperty('--mouse-y',mouseY.toString() + "%")
            }
        }
    };
    const startGradient = (e)=>{
      setIsdrawing(true);
      const mouseX = Math.round((e.pageX / winWidth)*100)
      const mouseY = Math.round((e.pageY / winHeight)*100)
      if(appRef){
        context.style.setProperty('--mouse-x',mouseX.toString() + "%")
        context.style.setProperty('--mouse-y',mouseY.toString() + "%")
      }
    }
    const endGradient = (e) => {
      setIsdrawing(false);
      const mouseX = Math.round((e.pageX / winWidth)*100)
      const mouseY = Math.round((e.pageY / winHeight)*100)
      if(appRef){
        context.style.setProperty('--mouse-x',mouseX.toString() + "%")
        context.style.setProperty('--mouse-y',mouseY.toString() + "%")
      }
    };
    // context.addEventListener("mousedown",startGradient);
    // context.addEventListener("mousemove",moveGradient);
    // context.addEventListener("mouseup",endGradient);
    return function cleanup(){
      // context.removeEventListener("mousedown",startGradient);
      // context.removeEventListener("mousemove",moveGradient);
      // context.removeEventListener("mouseup",endGradient);
    };
  },[appRef,isDrawing]);
  return (
    <div className="app" id="app" ref={appRef} data-scroll-container>
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
