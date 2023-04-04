import { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../services/getGifs";


export default function Search({params}){
    const [gifs, setGifs] = useState([])
    const {keyword} = params;


    useEffect(function () {
        console.log("Actualizando los gifs");
        getGifs({ keyword: keyword }).then(gifs => setGifs(gifs))
    }, [keyword])
    return(
        <ListOfGifs gifs={gifs}/>
    )
}