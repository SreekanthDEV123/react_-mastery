import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayComponent = ({ message }) => {
  const navigate = useNavigate();
  console.log("displayComponent1");
  const handleNaviagate = () => {
    console.log("handleNavigate");
    const randomNumber = Math.round(Math.random() * 100);
    navigate(`/app/${randomNumber}`);
  };
  return (
    <div>
      <h3>{message}</h3>
      <button onClick={handleNaviagate}>Navigate to Dynamic Page</button>
    </div>
  );
};

export default DisplayComponent;
