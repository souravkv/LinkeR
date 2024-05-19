import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Watched from "./Watched";

function Card() {
    interface Link {
        title: string,
        link: string,
        watched: boolean
    }
    const [linker, setlinker] = useState<Link[]>([]);

    useEffect(() => {
        axios.get('https://backend.spexod.workers.dev/bulk')
            .then(response => {
                setlinker(response.data.links);
            });
    }, []);

    // Create thumbnail code
    // @ts-ignore
    function getthumb(url) {
        let videoId;

        // Check if the URL is a shortened youtu.be URL
        if (url.includes('youtu.be')) {
            videoId = url.split('youtu.be/')[1]?.split('&')[0];
        } else {
            // Otherwise, it's a standard YouTube URL
            videoId = url.split('v=')[1]?.split('&')[0];
        }


        return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    }
    return (

        <div className=" bg-opacity-10  rounded-3xl ">

            <div className="   md:p-10    bg-opacity-10 text-black pt-5  grid grid-cols-2 md:grid-cols-5 pb-10 rounded-b-3xl shadow-lg  ">
                {linker.map((link: Link) => {
                    const thumb = getthumb(link.link);
                    console.log("yes " + thumb);

                    return (
                        <div key={link.link}>
                            <SingleCard title={link.title} link={link.link} watched={link.watched} thumbnail={thumb} />
                        </div>
                    );
                })}
            </div>

            <div className="  mt-16">
                <Watched linker={linker} />
            </div>




        </div>
    );
}

export default Card;
