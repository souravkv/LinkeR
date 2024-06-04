import ventura from '../assets/ventura.jpg'
import MacCard from './MacCard'





function MacWorksapce({img1,img2,img3=null}:{img1:string ,img2:string ,img3:string | null }) {
  return (
    <div id='worsapce1' className="relative  min-w-[57vw] m-14     hover:scale-105   ease-out duration-1000   ">
                <img className=' h-[40vh] w-[80vw]  md:h-[65vh] md:w-[60vw]  object-cover rounded-3xl   shadow-2xl drop-shadow-md ' src={ventura}></img>
               <MacCard image={img1 || null} tag="image viewer" a=" bottom-5  p-2 md:p-0 md:top-10" b="left-20"/>
               <MacCard image={img2 || null }  tag="vscode" a="top-5 p-2 md:p-0  md:top-10 " b="right-16"/>
               <MacCard image={img3 || null}  tag="spotify" a="bottom-14" b="right-64"/>

               
                </div> 
  )
}

export default MacWorksapce