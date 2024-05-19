import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react"; // Import useState instead of useEffect for managing state

function SingleCard({ title, link, thumbnail, watched }: { title: string, link: string, thumbnail: string, watched: boolean }) {

    const [isRemoved, setIsRemoved] = useState(false); // State to track if the card is removed

    async function watcher(link: string, watch: boolean) {
        await axios.put('https://backend.spexod.workers.dev/watched', {
            link,
            watch
        });
        // Update the watched state if necessary
    }

    async function remover(link: string) {
        try {
            await axios.delete('https://backend.spexod.workers.dev/link', {
                data: { link }
            });
            setIsRemoved(true); // Set the isRemoved state to true upon successful deletion
        } catch (error) {
            console.error('Error removing link:', error);
        }
    }

    // Return null if the card is removed
    if (isRemoved) {
        return null;
    }

    return (
        <div className="group  md:ease-out duration-500 hover:-translate-y-12 h-[15vh] md:h-[20vh]">
            <div className="relative brightness-75 font-thin text-xl text-white md:hover:text-2xl hover:brightness-100 bg-cover bg-opacity-50 h-[13vh] md:h-[15vh] shadow-xl m-3 rounded-xl flex justify-start items-end text-center" style={{ backgroundImage: `url(${thumbnail})` }}>
                <div onClick={() => { window.open(link, "_blank"); }} className="text-xs translate-y-[20px] absolute bottom-0 right-0 text-shadow-lg brightness-100 w-full text-left">{title}</div>
                {!watched && <div onClick={() => { watcher(link, true) }} style={{}} className="cursor-pointer absolute top-0 right-0 px-1 translate-x-2 mt-2 text-sm text-green-400 rounded-full bg-green-600">watched ?</div>}
            </div>
            <div className="w-full flex justify-end px-4">
                <div onClick={() => { remover(link) }} className="hidden group-hover:block hover:bg-red-700 bg-red-900 rounded-lg text-[10px] inline-block p-1"> <MdOutlineDeleteOutline size={15} color="gray" /></div>
            </div>
        </div>
    );
}

export default SingleCard;
