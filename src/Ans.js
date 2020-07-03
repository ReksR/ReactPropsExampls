import React from "react";

function Ans(props) {
  return (
    <div>
      <h1 style={{ display: !props.que && "none" }}>Question:{props.que}</h1>
      <h2 style={{ color: !props.que && "purple" }}>Answer: {props.ans} </h2>
      <hr />
    </div>
  );
}

export default Ans;
