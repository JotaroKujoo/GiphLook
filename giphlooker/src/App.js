import React from 'react';
import "./App.css"
import {Link, Route} from "wouter"
import Home from './pages/Home';
import Search from './pages/SearchResults';
import Detail from './pages/Detail';


function App() {

  return (
    <div className="App">
      
      <section className="App-content">

        <h1><Link className="linkDesign" to='/'>App</Link></h1>
            
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
