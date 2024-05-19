
import './App.css'
import { CiMenuBurger } from "react-icons/ci"; import Card from './components/Card'
import Hero from './components/Hero'
import { TbArrowBigDownLines } from "react-icons/tb";
import Footer from './components/Footer';




function App() {




  return (
    <>
      <div className=' select-none bg-black w-screen  '>
        <div className=' animate-bounce   z-40    text-white left-[40%]  md:hidden bottom-0 px-5 py-3  absolute'><TbArrowBigDownLines color='cyan' size={30} opacity={.4} /></div>



        <div className='  z-40    text-white right-0 top-0 p-5 fixed'><CiMenuBurger size={30} /></div>


        <div className='  bg-cover bg- bg-right  md:bg-left bg-black   bg-[url("https://images.unsplash.com/photo-1500408698778-2afa347782f3?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-[330vh]  md:h-[300vh] w-screen  '>

          <div className=' h-screen'>
            <Hero />

          </div>
          <div className='  md:ease-out duration-500  md:hover:-translate-y-12   m-6 md:m-20 bg-opacity-10 0 md:backdrop-blur-xl text-white bg-zinc-900 rounded-2xl    '>
            <div className='  text-cyan-700 duration-1000  hover:opacity-35     border-b   border-gray-800 font-Bangers text-7xl justify-center flex p-8 font-bold   '>
              Your Watch List
            </div>


            <div className=' ' >

              <Card />



            </div>


          </div>


        </div>
      </div>
      <div className=' bg-black h-screen'>
        <Footer />
      </div>
    </>
  )
}

export default App
