import Gif from "./Gif";
import React from 'react';


export default function ListOfGifs({gifs}) {

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