import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Watched from "./Watched";

function Card() {
    interface Link {
        title: string,
        link: string
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
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    }

    return (
        <div className=" bg-black">

            <div className=" p-8  md:p-20  bg-black text-black pt-5  grid grid-cols-2 md:grid-cols-5 pb-10 rounded-b-3xl shadow-lg  ">
                {linker.map((link: Link) => {
                    const thumb = getthumb(link.link);
                    console.log("yes " + thumb);

                    return (
                        <div key={link.link}>
                            <SingleCard title={link.title} link={link.link} thumbnail={thumb} />
                        </div>
                    );
                })}
            </div>

            <div className=" mt-16">
                <Watched />
            </div>




        </div>
    );
}

export default Card;
