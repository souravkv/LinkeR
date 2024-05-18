

function Card() {
    return (
        <div onClick={() => {
            window.open('https://www.youtube.com/watch?v=D28YLKppg5U&feature=youtu.be', "_blank")
        }} className='     hover:brightness-50  ease-in duration-200   bg-cover   bg-opacity-50  h-[20vh]  bg-[url("https://images8.alphacoders.com/132/1325051.jpeg")]   shadow-xl m-3 rounded-xl border border-gray-100 flex justify-center text-center ' >

            card 1

        </div>
    )
}

export default Card