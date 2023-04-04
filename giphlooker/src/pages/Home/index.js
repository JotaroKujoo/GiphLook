import React from "react"
import { Link } from "wouter"
import "./index.css"

const POPULAR_GIFS = ["Goku", "Jotaro", "Sonic", "Mario"]

export default function Home () {
    return (
        <>
            <h3>Los gifs mas populares</h3>

            {
                POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link className="linkDesign" to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))
            }
        </>
    )
}