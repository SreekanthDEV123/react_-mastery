import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <h2>error:{error.status}</h2>
      <h3> status:{error.statusText}</h3>
    </div>
  );
};

export default Error;
