import React, { useState } from "react";
import "./RestaurentCartCard.css";
import {
  addItem,
  removeItem,
  clearCart,
  addExtraItem,
  removeExtraItem,
} from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RestaurentCartCard = ({ res }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cart-item-container">
      <div className="headerpurchase">
        <h4>List of Items Purchase </h4>
      </div>
      {cartItems.map((eachItem) => (
        <div key={eachItem.id} className="card-details1">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17105.JPG"
            }
            alt="coming soon"
            className="logo1"
          />
          <div className="card-cost">Item Name:Biryani</div>
          <div className="card-cost">Item Cost:{eachItem.costForTwo} </div>
          <div className="card-length">
            <button
              onClick={() => {
                dispatch(addExtraItem(eachItem));
              }}
            >
              Add+
            </button>
            <button
              onClick={() => {
                dispatch(removeExtraItem(eachItem));
              }}
            >
              Sub-
            </button>
            <button
              onClick={() => {
                dispatch(removeItem(eachItem));
              }}
            >
              -Remove Item
            </button>
          </div>
          <h5>ItemQuantity:{eachItem.check} </h5>
          {/* <h5>{eachItem.pay} </h5> */}
        </div>
      ))}
    </div>
  );
};

export default RestaurentCartCard;

{
  /* <div>Price for Two: {res.costForTwo}</div>
<div>Pay Amount: {parseInt(res.pay) || 0}</div> */
}
