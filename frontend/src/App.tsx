
import './App.css'
import { CiMenuBurger } from "react-icons/ci"; import Card from './components/Card'
import Hero from './components/Hero'
import { TbArrowBigDownLines } from "react-icons/tb";
import Footer from './components/Footer';
import MacOs from './components/MacOS';
import { useRef } from 'react';
import { FaApple } from "react-icons/fa";





function App() {
  const macref = useRef<HTMLDivElement>(null)
  const wlistref = useRef<HTMLDivElement>(null)
  const creditsref = useRef<HTMLDivElement>(null)


   const scrollto = (to:any)=>{
      to.current?.scrollIntoView({behavior:'smooth'});
   }





  return (
    <>
      <div className=' select-none bg-black w-screen  '>
        <div id='navbar' className=' absolute top-0 bg-opacity-95 w-full  flex p-4 text-white  text-md  font-thin justify-between px-8'>
          <div  onClick={()=>{scrollto(macref)}} className=' hover:brightness-50 hover:cursor-pointer'>
            <FaApple color='white' size={26} opacity="80%"/>
          </div>
          <div className=' flex hover:cursor-pointer'>
              <div onClick={()=>{scrollto(wlistref)}} className='  hover:brightness-50 px-3 border-r border-gray-700'>watch list</div>
              <div onClick={()=>{scrollto(creditsref)}}  className='  hover:brightness-50 px-3 border-r border-gray-700'>credits</div>
          </div>
        </div>
        <div className=' animate-bounce   z-40    text-white left-[40%]  md:hidden bottom-0 px-5 py-3  absolute'><TbArrowBigDownLines color='cyan' size={30} opacity={.4} /></div>



        <div  className='  z-40    text-white right-0 bottom-0 p-3 fixed'><CiMenuBurger size={20} /></div>


        <div className='  bg-cover bg- bg-right  md:bg-left bg-black   bg-[url("https://images.unsplash.com/photo-1500408698778-2afa347782f3?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-[330vh]  md:h-[300vh] w-screen  '>

          <div className=' h-screen'>
            <Hero />

          </div>
          <div ref={wlistref} className='  md:ease-out duration-500  md:hover:-translate-y-12   m-6 md:m-20 bg-opacity-10 0 md:backdrop-blur-xl text-white bg-zinc-900 rounded-2xl    '>
            <div className='  text-cyan-700 duration-1000  hover:opacity-35     border-b   border-gray-800 font-Bangers text-7xl justify-center flex p-8 font-bold   '>
              Your Watch List
            </div>

            <Card />

          </div>


        </div>
      </div>

      <div ref={creditsref} className=' pt-64 bg-black h-[120vh'>
        <Footer />
      </div>

      <div ref={macref}>
        <MacOs />
      </div>
      <div className=' h-[50vh] bg-black'> 

      </div>
     
    </>
  )
}

export default App
