import React from "react";
import "./EventBublingCapturing.css";

const EventBublingCapturing = () => {
  const callThird = (e) => {
    //alert('3 function called');
    // e.stopPropagation();
    console.log("third");
  };
  const callSecond = (e) => {
    //alert('2 function called');
    // e.stopPropagation();

    console.log("second");
  };
  const callFirst = (e) => {
    // alert('first function called');
    // e.stopPropagation();

    console.log("first");
  };
  // onClick => event bubbling
  // onClickCapture=> event capturing
  return (
    <div>
      <div className="third" onClick={callThird}>
        <div className="second" onClick={callSecond}>
          <div className="first" onClick={callFirst}></div>
        </div>
      </div>
    </div>
  );
};
export default EventBublingCapturing;
