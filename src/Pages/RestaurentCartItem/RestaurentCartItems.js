import React from "react";
import RestaurentCartCard from "./RestaurentCartCard";
import "./RestaurentCartItems.css";
const RestaurentCartItems = () => {
  return (
    <div className="row">
      {/* {cartItems.length > 0 &&
        cartItems.map((ele, index) => (
          <RestaurentCartCard key={index} res={ele} />
        ))} */}
      <div className="col-md-8">
        <RestaurentCartCard />
      </div>
    </div>
  );
};

export default RestaurentCartItems;





