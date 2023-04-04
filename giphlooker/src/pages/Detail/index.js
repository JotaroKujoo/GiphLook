import { useEffect, useState } from "react"
import GifDetail from "../../components/GifDetail"
import GetGifsById from "../../services/GetGifsById"

export default function Detail ({params}){
    const [gifs, setGif] = useState([])

    useEffect(()=>{
        GetGifsById(params.id)
            .then(res => setGif({
                url: res.images.downsized_medium.url,
                title: res.title
            }))
    },[params.id])

    return(
        <>
            <GifDetail 
            id={params.id}
            title={gifs.title}
            url={gifs.url}
            />
        </>
    )
}