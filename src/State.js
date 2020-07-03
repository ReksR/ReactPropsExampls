import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { IsGodExist: true };
  }
  render() {
    let God;
    if (this.state.IsGodExist) {
      God = "He is True";
    } else {
      God = "He is always True";
    }
    return (
      <div>
        <h3> Is God True: {God}</h3>
      </div>
    );
  }
}

export default App;
