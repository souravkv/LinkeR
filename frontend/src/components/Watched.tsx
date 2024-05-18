
function Watched() {


    return (
        <div className=" w-screen  px-4  bg-white ">



            <div className=" flex justify-center w-full  mt-4 p-3 text-3xl  text-cyan-700">Watched List </div>

            <div className=" grid grid-cols-2  pb-32">
                <div className=" border-r-2">
                    <div className=" text-cyan-900 flex justify-center pb-3"> watssched</div>

                    <div className=" text-cyan-900  px-5 text-sm font-thin py-1">god of war</div>
                    <div className=" text-cyan-900  px-5 text-sm font-thin py-1"> master</div>




                </div>
                <div className=" text-cyan-900 ">
                    <div className="   flex justify-center pb-3"> To watch</div>

                    <div className=" px-5 text-sm   py-1">react 19</div>
                    <div className=" px-5 text-sm  py-1"> ddotnet</div>


                </div>

            </div>
        </div>
    )
}

export default Watched