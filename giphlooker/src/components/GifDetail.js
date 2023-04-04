import { useEffect, useState } from "react"
import GetGifsById from "../services/GetGifsById"

export default function GifDetail(gif){
    console.log(gif.params.id)
    const [id, setId] = useState([])
    const [gifs, setGif] = useState([])

    useEffect(()=>{
        setId(gif.params.id)
        GetGifsById(gif.params.id)
            .then(res => setGif(res.images.downsized_medium.url))
    },[gif.params.id])

    return (
        <div>
            <h1>{id}</h1>
            <img src={gifs} />
        </div>
    )
}