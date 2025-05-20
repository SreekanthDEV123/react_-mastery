import React from "react";
import "./Sue.css";
import WithCounter from "./WithCounter";

const Sue = ({ count, incrementCounter }) => {
  console.log("Current Count:", count); // This should log the updated count

  return (
    <div className="sue">
      <h1>Hit Me</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={incrementCounter} className="btn btn-danger click22 ">
          Click
        </button>
      </div>
    </div>
  );
};

export default WithCounter(Sue);
