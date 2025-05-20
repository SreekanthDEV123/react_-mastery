import React from "react";
import "./Hit.css";
import WithCounter from "./WithCounter";

const Hit = ({ count, incrementCounter }) => {
  console.log("Current Count:", count);

  return (
    <div className="hit">
      <h1>Hit Me</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={incrementCounter} className="btn btn-danger click11">
          Click
        </button>
      </div>
    </div>
  );
};

export default WithCounter(Hit);
