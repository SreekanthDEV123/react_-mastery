import React, { useState } from "react";
import "./RestaurentCard.css";
import ProductDetails from "./ProductDetails";
// import ProductDetails from "./ProductDetails";
// import { totalCheck } from "./utils/restUtils";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurentCard = ({ res, handleSearch, restaurent }) => {
  // const [details, setDetails] = useState([]);
  // console.log(restaurent, "uuuu");
  const [details, setDetails] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const dispatch = useDispatch();
  const closeModal = () => {
    setShowProduct(false);
  };
  const addMoney = (para) => {
    // totalCheck(para.check)
    const updatedData = restaurent.map((ele) => {
      if (ele.id === para.id) {
        return {
          ...ele,
          pay: ele.pay + ele.costForTwo,
          check: ele.check + 1,
        };
      } else {
        return ele;
      }
    });

    handleSearch(updatedData);
    // totalCheck(para.check);
    // handleAddItem(para.id);
  };
  const handleAddItem = (id) => {
    const updatedRestaurants = restaurent.map((restaurant) => {
      console.log(restaurant.items, "jjjjjkmkk");
      if (restaurant.id === id) {
        return { ...restaurant, items: 10 };
      }
      return restaurant;
    });
    // setRestaurent(updatedRestaurants);
    console.log(updatedRestaurants, "jjjj");
  };
  const delMoney = (para) => {
    const updatedData = restaurent.map((ele) => {
      if (ele.id === para.id && para.check >= 1) {
        return {
          ...ele,
          pay: ele.pay - ele.costForTwo,
          check: ele.check - 1,
        };
      } else {
        return ele;
      }
    });

    // setDetails(updatedData);
    handleSearch(updatedData);
  };
  console.log(showProduct, "jj");
  return (
    <div className="restaurent-card">
      <div className="card">
        <img
          className="logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17105.JPG"
          }
          alt="coming soon"
        />
        <div className="card-details" onClick={() => setShowProduct(true)}>
          <h4>Name: {res.name}</h4>
          {/* <h4>Description:{res.description}</h4> */}
          <div>ID: {res.id}</div>
          <div>Cuisines: {res.cuisines}</div>
          <div>Average Rating: {res.avgRating} ⭐stars</div>
          <div>Area: {res.area}</div>
          <div>Delivery Time: {res.deliveryTime}</div>
          <div>Price for Two: {res.costForTwo}</div>
          <div>Pay Amount: {parseInt(res.pay) || 0}</div>
        </div>

        <div class="d-flex justify-content-around">
          <button className="btn btn-danger" onClick={() => addMoney(res)}>
            ➕
          </button>
          <button className="btn btn-danger" onClick={() => delMoney(res)}>
            ➖
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(addItem(res))}
          >
            addItem
          </button>
        </div>
        <h4 className="items">Items: {res.check}</h4>
      </div>
      {showProduct && <ProductDetails closeModal={closeModal} res={res} />}
    </div>
  );
};

export default RestaurentCard;
