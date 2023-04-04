import React, { useEffect, useState } from 'react';
import "./App.css"
import Gif from './components/Gif';
import Looker from './components/Looker';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';
import {Route, Link} from "wouter"
import GifDetail from './components/GifDetail';


function App() {
  const [keyword, setKeyword] = useState("Morty")

  return (
    <div className="App">
      
      <section className="App-content">
        <h1>App</h1>
          
        
        <div className='linkContainer'>

        <Link className='linkDesign' to='/gif/dragonball'>Gifs de Dragon Ball</Link>
        <Link className='linkDesign' to='/gif/jojo'>Gifs de Jojo</Link>
        <Link className='linkDesign' to='/gif/berserk'> Gifs de Berserk </Link>

        </div>
          
        
          
              
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />

        <Route
          component={GifDetail}
          path='/gifdetail/:id'
        />

        
      </section>
        
    </div>
  );
}

export default App;
