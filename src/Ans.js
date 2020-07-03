import React from "react";

function Ans(props) {
  return (
    <div>
      <h1 style={{ display: !props.que.question && "none" }}>
        Question:{props.que.question}
      </h1>
      <h2 style={{ color: !props.que.question && "purple" }}>
        Answer: {props.ans.answer}{" "}
      </h2>
      <hr />
    </div>
  );
}

export default Ans;
