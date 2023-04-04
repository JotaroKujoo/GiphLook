import React, { useEffect, useState } from 'react';
import "./App.css"
import Gif from './components/Gif';
import Looker from './components/Looker';
import getGifs from './services/getGifs';

const GIFS = [
  "https://media2.giphy.com/media/TI9HiyUqRm75jPyKQ5/giphy.gif?cid=9e617a086cpwj2aspjvz17982j9ftylxflvkeyd86c22198b&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/4N5vB4aErlVtVsywBw/200w.webp?cid=ecf05e47ti8wbskci0rnin38v1294ockfsf79yfd3703a9uw&rid=200w.webp&ct=g"
]

const DIFFERENT_GIF_URL = [
  "https://media0.giphy.com/media/LT6qqF1xcxNrJk3bva/200w.webp?cid=ecf05e47ti8wbskci0rnin38v1294ockfsf79yfd3703a9uw&rid=200w.webp&ct=g",
  "https://media4.giphy.com/media/QyhVlLPbH6Z736OHur/200w.webp?cid=ecf05e47ti8wbskci0rnin38v1294ockfsf79yfd3703a9uw&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/QyWBTLDn9WHt0FXGJS/200w.webp?cid=ecf05e47ti8wbskci0rnin38v1294ockfsf79yfd3703a9uw&rid=200w.webp&ct=g"
]



function App() {
  const [gifs, setGifs] = useState([])


  useEffect(function (){
    console.log("Actualizando los gifs");
    getGifs({keyword: "morty"}).then(gifs => setGifs(gifs))
    

  }, []) 

  return (
    <div className="App">
      
      <section className="App-content">
        <Looker/>
      

        {
          gifs.map((gif)=>
            <Gif
              key={gif.id}
              id={gif.id}
              title={gif.title}
              url={gif.url}
            />
          )
        }
        <button onClick={()=>setGifs(DIFFERENT_GIF_URL)}>Cambiar memes</button>
      </section>
        
    </div>
  );
}

export default App;
