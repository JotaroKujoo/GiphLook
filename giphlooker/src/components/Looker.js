import React, { useEffect, useState } from 'react';


export default function Looker(){
    const [busqueda, setBusqueda] = useState([])

    useEffect(() =>{
      console.log(busqueda)
    },[busqueda])
  
    const buttonHandler = () => {
        console.log(busqueda)
    }
    return (
    <section>
        <input type="text" className="inputHolders" onChange={(e)=>{setBusqueda(e.target.value)}} placeholder="Introduce tu búsqueda..." />
        <button className="buttonSearches" onClick={()=>{buttonHandler()}}>Buscar</button>
    </section>
    )
}