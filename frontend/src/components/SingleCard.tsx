

function SingleCard({ title, link, thumbnail }: { title: string, link: string, thumbnail: string }) {

    console.log("----" + thumbnail + "--")
    return (

        <div
            onClick={() => {
                window.open(link, "_blank");
            }}
            className="font-thin text-xl text-white hover:text-2xl hover:brightness-100 ease-in duration-200 bg-cover bg-opacity-50 h-[20vh] shadow-xl m-3 rounded-xl flex justify-start p-2 items-end text-center"
            style={{
                backgroundImage: `url(${thumbnail})`,
                filter: 'brightness(90%)', // Adjust the brightness of the background image
            }}
        >
            <div className="brightness-100">{title}</div>
        </div>

    )
}

export default SingleCard