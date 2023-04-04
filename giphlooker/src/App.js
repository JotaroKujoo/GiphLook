import React, { useEffect, useState } from 'react';
import "./App.css"
import Gif from './components/Gif';
import Looker from './components/Looker';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';
import {Route, Link} from "wouter"
import GifDetail from './components/GifDetail';
import Home from './pages/Home';
import Search from './pages/SearchResults';
import Detail from './pages/Detail';


function App() {
  const [keyword, setKeyword] = useState("Morty")

  return (
    <div className="App">
      
      <section className="App-content">
        
        <h1><a href='/'>App</a></h1>
            
        <Route 
          component={Home}
          path='/'
        />
        <Route
          component={Search}
          path='/search/:keyword'
        />

        <Route
          component={Detail}
          path='/gifdetail/:id'
        />

        
      </section>
        
    </div>
  );
}

export default App;
