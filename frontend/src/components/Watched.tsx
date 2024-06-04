
interface Link {
    title: string;
    link: string;
    watched: boolean;
}

interface WatchedProps {
    linker: Link[];
}

const Watched: React.FC<WatchedProps> = ({ linker }) => {




    return (
        <div>


            <div className="  w-full h-[57svh] pt-4 pb-32 md:pb-0  bg-black rounded-3xl ">



                <div className=" md:ease-out duration-500  hover:text-cyan-100  border-b   border-gray-800  flex justify-center    mt-4 pb-8 font-thin  text-4xl  text-cyan-400">Watched List </div>

                <div className=" grid grid-cols-2  pb-32">
                    <div className=" border-r border-gray-800  text-cyan-600 font-thin px-5 text-sm   ">
                        <div className=" text-cyan-600 flex justify-center text-lg  pt-5"> <div className=" text-cyan-400 ">watched </div></div>

                        <div className=" scrollbar-hide  overflow-scroll h-[40vh]">



                            {linker.map((link: { watched: Boolean, title: string }) => {
                                if (link.watched)
                                    return (<div className=" md:ease-out duration-500  hover:text-lg   text-xs  py-1" > {link.title}</div>)
                            })}





                        </div>

                    </div>
                    <div className="font-thin  ">
                        <div className="  text-cyan-200  text-lg p-5    flex justify-center pb-3"> To watch</div>

                        <div className="  overflow-auto h-[30vh]">

                            {linker.map((link: { watched: Boolean, title: string }) => {
                                if (!link.watched)
                                    return (<div className="  md:ease-out duration-500  hover:text-lg  text-cyan-200  px-6 text-xs  py-1" > {link.title}</div>)
                            })}


                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Watched