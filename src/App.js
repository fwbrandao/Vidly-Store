import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

library.add(faGhost);

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* call movie component */}
        <Movies />
      </main>
    );
  }
}

export default App;
