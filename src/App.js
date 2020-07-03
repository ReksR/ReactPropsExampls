import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "jesus" };
  }
  render() {
    return <h1>hi {this.state.name}</h1>;
  }
}

export default App;
