import React from "react";
import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Search from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";

function App() {
  return (
    <StaticContext.Provider value={{name: "Jose",
    VivanLosJoJos: true,}}>
      <div className="App">
        <section className="App-content">
          <h1>
            <Link className="linkDesign" to="/">
              GIPHY
            </Link>
          </h1>

          <Route component={Home} path="/" />
          <Route component={Search} path="/search/:keyword" />

          <Route component={Detail} path="/gifdetail/:id" />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
