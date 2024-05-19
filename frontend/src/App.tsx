
import './App.css'
import { CiMenuBurger } from "react-icons/ci"; import Card from './components/Card'
import Hero from './components/Hero'





function App() {




  return (
    <>
      <div className=' select-none bg-black '>


        <div className='  z-40    text-white right-0 top-0 p-5 fixed'><CiMenuBurger size={30} /></div>
        <div className='  bg-cover bg- bg-right  md:bg-left bg-black   bg-[url("https://images.unsplash.com/photo-1500408698778-2afa347782f3?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-[410vh]  md:h-[300vh] w-screen  '>

          <div className=' h-screen'>
            <Hero />

          </div>
          <div className=' m-6 md:m-20 bg-opacity-10 0 md:backdrop-blur-xl text-white bg-zinc-900 rounded-2xl    '>
            <div className=' justify-center flex p-4  font-bold  text-3xl text-gray-200'>
              LINKS
            </div>


            <div className=' ' >

              <Card />



            </div>


          </div>


        </div>
      </div>
    </>
  )
}

export default App
