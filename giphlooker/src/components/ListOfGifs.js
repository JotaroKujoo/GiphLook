import getGifs from "../services/getGifs";
import Gif from "./Gif";
import React, { useEffect, useState } from 'react';


export default function ListOfGifs({params}) {
    const [gifs, setGifs] = useState([])
    const {keyword} = params;


    useEffect(function () {
        console.log("Actualizando los gifs");
        getGifs({ keyword: keyword }).then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        <>
            {
                gifs.map((gif) =>
                    <Gif
                        id={gif.id}
                        key={gif.id}
                        title={gif.title}
                        url={gif.url}
                    />
                )
            }
        </>
    )
}