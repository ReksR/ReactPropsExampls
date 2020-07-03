import React from "react";
import Ans from "./Ans";
import db from "./db";
/*
function App() {
  const den = db.map(questions => <Ans que={questions} ans={questions} />);
  return <div>{den}</div>;
}

export default App;
*/

class App extends React.Component {
  render() {
    const den = db.map(questions => <Ans que={questions} ans={questions} />);
    return <div>{den}</div>;
  }
}
