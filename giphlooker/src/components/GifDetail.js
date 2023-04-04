import React from "react"

export default function GifDetail({id,url,title}){
    
    return (
        <div>
            <h1>{title}</h1>
            <img src={url} />
        </div>
    )
}