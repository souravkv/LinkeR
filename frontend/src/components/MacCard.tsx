import { IoCloseOutline } from "react-icons/io5";

function MacCard({image,a,b,tag}:{image:any,a:string,b:string,tag:string}) {
  return (
    <div className={` ${a} ${b}   absolute  group  hover:scale-105   duration-300 select-none`}>

    <img  className='  md:h-[24vh] opacity-95 brightness-90 duration-300 hover:brightness-100 shadow-2xl drop-shadow-2xl     rounded-3xl ' src={image} />
    <div className='  '>

        <div className=' absolute top-0 right-0 transition opacity-5 group-hover:opacity-100  bg-white bg-opacity-30 translate-x-3  -translate-y-3  rounded-full  p-1 hover:bg-opacity-70 duration-300'>< IoCloseOutline size={20} /></div>
        <div className=' absolute  text-xs rounded-lg  bottom-0 left-32 opacity-0 group-hover:opacity-100  duration-300 ease-out translate-y-10 text-white p-2  bg-zinc-900'>{tag}</div>
    </div>
    </div>
  )
}

export default MacCard