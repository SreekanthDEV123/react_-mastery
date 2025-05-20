import React, { useState } from "react";

const WithCounter = (WrappedComponent) => {
  return function WithCounterComponent(props) {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      setCount(count + 1);
      console.log(count, "");
    };

    return (
      <WrappedComponent
        count={count}
        incrementCounter={incrementCounter}
        {...props}
      />
    );
  };
};

export default WithCounter;
