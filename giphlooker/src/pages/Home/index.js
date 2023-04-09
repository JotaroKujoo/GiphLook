import React, { useState,useEffect } from "react"
import "./index.css"
import ListOfGifs from "../../components/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"
import Spinner from "../../components/Spinner"
import HomeView from "../../components/HomeView"


export default function Home() {
    const [keyword, setKeyword] = useState("Rick")
    
    
    const {loading,gifs} =  useGifs({keyword})
    
    return (
        <>
            {
                loading
                ? <Spinner/>
                : <div><HomeView gifs={gifs}/> <ListOfGifs gifs={gifs}/></div>
            }
        </>
    )
}