

function Watched({ linker }: { linker: [] }) {


    return (
        <div>


            <div className=" w-full pt-4  bg-black rounded-t-3xl ">



                <div className=" flex justify-center   mt-4 p-3 mb-6 font-thin  text-4xl  text-cyan-400">Watched List </div>

                <div className=" grid grid-cols-2  pb-32">
                    <div className=" border-r-2  text-cyan-600 font-thin px-5 text-sm   ">
                        <div className=" text-cyan-600 flex justify-center pb-3"> <div className=" text-cyan-400 ">watched </div></div>
                        <div className=" py-1">god of war</div>



                        {linker.map((link: { watched: Boolean, title: string }) => {
                            if (link.watched)
                                return (<div className="px-5text-sm  py-1" > {"` " + link.title}</div>)
                        })}






                    </div>
                    <div className=" text-cyan-700 ">
                        <div className="   flex justify-center pb-3"> To watch</div>


                        {linker.map((link: { watched: Boolean, title: string }) => {
                            if (!link.watched)
                                return (<div className="px-5 text-sm  py-1" > {"` " + link.title}</div>)
                        })}



                    </div>

                </div>
            </div>
        </div>
    )
}

export default Watched