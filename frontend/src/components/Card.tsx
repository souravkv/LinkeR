import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

function Card() {
    interface Link {
        title: string,
        link: string
    }
    const [linker, setlinker] = useState<Link[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8787/bulk')
            .then(response => {
                setlinker(response.data.links);
            });
    }, []);

    // Create thumbnail code
    // @ts-ignore
    function getthumb(url) {
        const videoId = url.split('v=')[1];
        return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    }

    return (
        <div className="bg-white text-black mt-5 grid grid-cols-2 md:grid-cols-5 pb-10 shadow-lg">
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
    );
}

export default Card;
