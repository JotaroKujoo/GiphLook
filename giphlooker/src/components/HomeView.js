import { useState } from "react"
import { Link, useLocation } from "wouter"

const POPULAR_GIFS = ["Goku", "Jotaro", "Sonic", "Mario"]

export default function HomeView ({gifs}){
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()
    
    const handleSubmit = evt => {
        evt.preventDefault()
        //Navegear a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <h3>Los gifs mas populares</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search for a gif..."
                    onChange={handleChange}
                    value={keyword}
                />
                <button>Buscar</button>

            </form>

            <div className="listContainer">
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link className="linkDesign" to={`/search/${popularGif}`}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
            </div>
            <h3>Ultima búsqueda</h3>
                

            
        </>
    )

}