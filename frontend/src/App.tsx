
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Watched from './components/Watched'


function App() {


  return (
    <>
      <div className=' bg-slate-900  h-[200vh] w-screen  '>

        <div className=' h-screen'>
          <Hero />

        </div>
        <div className=' text-black  bg-white  w-screen mb-5 '>
          <div className=' justify-center flex p-4 font-bold  text-3xl text-cyan-700'>
            LINKS
          </div>


          <div >

            <Card />



          </div>


        </div>

        <Watched />
      </div>
    </>
  )
}

export default App
