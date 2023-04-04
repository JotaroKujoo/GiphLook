import { useEffect, useState } from "react"
import GifDetail from "../../components/GifDetail"
import GetGifsById from "../../services/GetGifsById"

export default function Detail ({params}){
    const [id, setId] = useState([])
    const [gifs, setGif] = useState([])

    useEffect(()=>{
        setId(params.id)
        GetGifsById(params.id)
            .then(res => setGif(res.images.downsized_medium.url))
    },[params.id])

    return(
        <>
            <GifDetail 
            id={params.id}
            url={gifs}
            />
        </>
    )
}