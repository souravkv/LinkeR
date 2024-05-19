import axios from "axios";


function SingleCard({ title, link, thumbnail, watched }: { title: string, link: string, thumbnail: string, watched: boolean }) {



    // console.log("----" + thumbnail + "--")

    async function watcher(link: string, watch: boolean) {
        await axios.put('https://backend.spexod.workers.dev/watched', {
            link,
            watch
        })

        window.location.reload()


    }


    return (
        <div className=" md:ease-out duration-500  hover:-translate-y-12    h-[15vh]">


            <div

                className="  relative brightness-75   font-thin text-xl text-white   md:hover:text-2xl hover:brightness-100 bg-center  bg-cover bg-opacity-50 h-[13vh] md:h-[15vh] shadow-xl m-3 rounded-xl flex justify-start  items-end text-center"
                style={{
                    backgroundImage: `url(${thumbnail})`, // Adjust the brightness of the background image
                }}
            >
                <div onClick={() => {
                    window.open(link, "_blank");
                }} className=" text-xs    translate-y-[20px]    absolute bottom-0 right-0     text-shadow-lg brightness-100        w-full text-left    ">{title}</div>

                {/* inside div */}
                {watched ? null : <div onClick={() => { watcher(link, true) }} style={{}} className="  cursor-pointer absolute top-0 right-0 px-1  translate-x-2 mt-2  text-sm  text-green-400 rounded-full bg-green-600">watched ?</div>}

            </div>


        </div >
    )
}
{/* <div onClick={() => { watcher(link, true) }} style={{}} className=" absolute top-0 right-0 px-1  -translate-y-4  text-sm  text-green-400 rounded-full bg-green-600">watched</div> */ }

export default SingleCard