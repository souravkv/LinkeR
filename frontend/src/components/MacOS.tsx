
import ventura from '../assets/ventura.jpg'
import vblur from '../assets/venturablur.png'
import MacCard from './MacCard'
import Mactaskbar from './Mactaskbar'
import toji1 from '../assets/toji1.png'
import vscode from '../assets/vscode.png'
import spotify from '../assets/spotify.png'




export default function MacOs(){

    return(
        <div style={{backgroundImage:   `url(${vblur})`,  backgroundSize: 'cover'}}  className=" select-none h-[80vh] md:h-[87vh]  ">
          <Mactaskbar/>
            <div className=' h-full w-full flex flex-col justify-center items-center  '>
            <div id='worsapce1' className="relative    hover:scale-105   ease-out duration-1000  ">
                <img className=' h-[40vh] w-[80vw]  md:h-[65vh] md:w-[60vw]  object-cover rounded-3xl   shadow-2xl drop-shadow-md ' src={ventura}></img>
               <MacCard image={toji1} tag="image viewer" a="top-10" b="left-20"/>
               <MacCard image={vscode }  tag="vscode" a="top-10" b="right-16"/>
               <MacCard image={spotify }  tag="spotify" a="bottom-14" b="right-64"/>

               
                </div>  0
            </div>
           
        
        </div>
    )
}