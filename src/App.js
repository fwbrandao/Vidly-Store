import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Movies from "./components/movies";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

library.add(faGhost);

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* call movie component */}
        <Movies />
        <div className="">
            <Route path="/" Component={Home} />
            <Route path="" Component={} />
            <Route path="" Component={} />
        </div>
      </main>
    );
  }
}

export default App;
