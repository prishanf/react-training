import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is from React</h1>
        <h2>It's really working</h2>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
