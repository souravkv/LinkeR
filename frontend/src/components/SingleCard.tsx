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
        <div>


            <div

                className="  brightness-90  font-thin text-xl text-white  md:brightness-75 md:hover:text-2xl hover:brightness-100 md:ease-in duration-200 bg-cover bg-opacity-50 h-[20vh] shadow-xl m-5 rounded-xl flex justify-start p-2 items-end text-center"
                style={{
                    backgroundImage: `url(${thumbnail})`, // Adjust the brightness of the background image
                }}
            >
                <div style={{ filter: 'brightness(100%)' }} onClick={() => {
                    window.open(link, "_blank");
                }} className=" brightness-100">{title}</div>
                {watched ? null : <div onClick={() => { watcher(link, true) }} style={{}} className="  cursor-pointer absolute top-0 right-0 px-1  translate-x-2 mt-2  text-sm  text-green-400 rounded-full bg-green-600">watched ?</div>}

            </div>


        </div >
    )
}
{/* <div onClick={() => { watcher(link, true) }} style={{}} className=" absolute top-0 right-0 px-1  -translate-y-4  text-sm  text-green-400 rounded-full bg-green-600">watched</div> */ }

export default SingleCard