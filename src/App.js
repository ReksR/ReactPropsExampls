import React from "react";
import Ans from "./Ans";
import db from "./db";

function App() {
  const den = db.map(questions => (
    <Ans que={questions.question} ans={questions.answer} />
  ));
  return <div>{den}</div>;
}

export default App;
