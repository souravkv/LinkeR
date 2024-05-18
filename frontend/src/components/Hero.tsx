import { useState } from "react"
import Adder from "./Adder"
import axios from "axios"


function Hero() {



    const [details, setdetails] = useState({
        title: "",
        link: ""
    })

    console.log(details.title)

    console.log(details.link)

    async function request() {

        await axios.post('https://backend.spexod.workers.dev/links', {
            title: details.title,
            link: details.link
        })
        console.log("axios post done")
        window.location.reload()
    }

    return (
        <div className=' h-[60%] flex flex-col justify-between items-center mb-20 '>

            <div>
                <div className='text-white text-[10vh] mt-32 '>LinkeR</div>
            </div>


            <div>

                <Adder onclick={(e) => { setdetails({ ...details, title: e.target.value }) }} title="Title " />
                <Adder onclick={(e) => { setdetails({ ...details, link: e.target.value }) }} title="Link " />
                <div className=' w-full flex justify-center'>
                    <button onClick={request} type="submit" className=" mt-5 text-white bg-black border border-gray-700 hover:bg-gray-800  focus:ring-gray font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

                </div>

            </div>
        </div>
    )
}

export default Hero