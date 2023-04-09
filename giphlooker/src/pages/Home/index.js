import "./index.css"
import ListOfGifs from "../../components/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"
import Spinner from "../../components/Spinner"
import HomeView from "../../components/HomeView"


export default function Home() {
    
    
    const {loading,gifs} =  useGifs()
    
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