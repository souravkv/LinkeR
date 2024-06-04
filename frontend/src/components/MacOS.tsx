
import vblur from '../assets/venturablur.png'
import Mactaskbar from './Mactaskbar'

import { useRef } from 'react'
import MacWorksapce from './MacWorksapce'
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import toji1 from '../assets/toji1.png'
import toji2 from '../assets/toji2.png'
import toji3 from '../assets/toji3.png'
import zourv from '../assets/zourv.png'

import gojo1 from '../assets/gojo1.png'
import vscode from '../assets/vscode.png'
import spotify from '../assets/spotify.png'






export default function MacOs(){

    const macSlider = useRef(null);

    const right = ()=>{
        if(macSlider.current){

            // @ts-ignore
            macSlider.current.scrollLeft+=940;
        }
        
       
    }
    const left = ()=>{
        if(macSlider.current){

            // @ts-ignore
            macSlider.current.scrollLeft-=940;
        }
        
       
    }

    return(
        <div style={{backgroundImage:   `url(${vblur})`,  backgroundSize: 'cover'}}  className=" select-none h-[80vh] md:h-[87vh]  ">
          <Mactaskbar/>
            <div ref={macSlider} className=' scrollbar-hide   h-full w-full flex flex-col justify-center overflow-scroll scroll-smooth   '>
           
           <div   className=' flex  '>
            <div className='      pl-64'>
                <MacWorksapce img1={toji1} img2={vscode} img3={spotify} />
            </div>
                <MacWorksapce  img1={zourv } img3={null}  img2={vscode} />
            <div className='      pr-64'>
                 <MacWorksapce img1={toji2} img2={gojo1} img3={toji3}    />
             </div>

           </div>
           
            </div>
            <div id='left-right-arrow'  className=' hidden md:flex cursor-pointer    justify-between px-52 -translate-y-[440%]'>
                <div onClick={left} className=' p-4 bg-opacity-0 hover:bg-opacity-30 hover:translate-x-5 ease-out duration-500 bg-black rounded-full'>
                    <FaAngleLeft color='orange' size={50}  />                
                </div>

                <div  onClick={right} className=' p-4 bg-opacity-0 hover:bg-opacity-30 hover:-translate-x-5 ease-out duration-500 bg-black rounded-full'>
                    <FaChevronRight color='orange' size={50}  />
                </div>
            </div>
           

           
        
        </div>
    )
}