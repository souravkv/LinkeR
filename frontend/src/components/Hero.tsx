import Adder from "./Adder"


function Hero() {
    return (
        <div className=' h-[60%] flex flex-col justify-between items-center mb-20 '>
            <div>
                <div className='text-white text-[10vh] mt-32 '>LinkeR</div>
            </div>


            <div>

                <Adder title="Title " />
                <Adder title="Link " />
                <div className=' w-full flex justify-center'>
                    <button type="submit" className=" mt-5 text-white bg-black border border-gray-700 hover:bg-gray-800  focus:ring-gray font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Hero