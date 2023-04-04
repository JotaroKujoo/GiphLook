import React from "react"

export default function GifDetail({id,url}){
    
    return (
        <div>
            <h1>{id}</h1>
            <img src={url} />
        </div>
    )
}