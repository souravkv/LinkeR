import { FaApple } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";


function Mactaskbar() {
  

   

     

  return (
    <div id="taskbar" className="relative flex justify-between items-center text-white p-3 text-sm opacity-80">
    <div className="flex items-center  hover:bg-white  hover:bg-opacity-15 p-2 rounded-3xl px-4 duration-200">
      <FaApple size={20} />
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2 duration-200  hover:bg-white  hover:bg-opacity-15 p-2 rounded-3xl px-4">
      <div className="time">May 28 10:38PM</div>
    </div>
    <div className="flex items-center  hover:bg-white  hover:bg-opacity-15 p-2 rounded-3xl px-4 duration-200">
      <div className="px-2 ">
        <IoIosWifi size={20} />
      </div>
      <div className="px-2">53%</div>
    </div>
  </div>
  )
}

export default Mactaskbar