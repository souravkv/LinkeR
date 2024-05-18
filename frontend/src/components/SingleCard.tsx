

function SingleCard({ title, link, thumbnail }: { title: string, link: string, thumbnail: string }) {

    console.log("----" + thumbnail + "--")
    return (


        <div style={{ backgroundImage: `url(${thumbnail})` }} onClick={() => {
            window.open(link, "_blank")
        }} className={`  =  font-thin text-lg  text-white   hover:brightness-50  ease-in duration-200   bg-cover   bg-opacity-50  h-[20vh]    shadow-xl m-3 rounded-xl border border-gray-100 flex justify-start  p-2  items-end text-center `} >

            {title}

        </div>
    )
}

export default SingleCard