// import { Link } from "react-router-dom";
// import useOnlineStatus from "./useOnlineStatus";
import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import NetflixForm from "./NetflixForm";
import { useSelector } from "react-redux";
const Header = () => {
  const [random, setRandom] = useState(0);
  // let btnName ="Login";    <li><a href ="/about">Home</a></li>
  const cartItems = useSelector((state) => state.cart.items);
  //   const onlineStatus = useOnlineStatus();
  // console.log("hai");
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/");
  };
  const handleButtonRestaurent = () => {
    console.log("sn");
    navigate("/app");
  };
  const handleNaviagate = () => {
    console.log("handleNavigate");
    const randomNumber = Math.round(Math.random() * 100);
    navigate(`/app/${randomNumber}`);
    console.log(randomNumber);
    // setRandom(randomNumber);
  };
  return (
    <div className="header">
      <img
        className="img-logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt="im coming"
        onClick={() => handleButtonRestaurent()}
      />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="postList">PostList</Link>
          </li>
          <li>
            <Link to="Nevina">NevinaAccordion</Link>
          </li>
          <li>
            <Link to="uiLibraries">UILibraries</Link>
          </li>
          <li>
            <Link to="classCom">ClassCom</Link>
          </li>
          <li>
            <Link to="home">Homes</Link>
          </li>
          <li>
            {/* <Link to={`${random}`} onClick={handleNaviagate}>
              Dynamic Route
            </Link> */}
            <a onClick={handleNaviagate}>Dynamic Route</a>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="booking">Booking</Link>
          </li>

          <li>
            <Link to="RestaurentCartitem">
              🛒 Cart({cartItems.length}items)
            </Link>
          </li>

          <li>
            {" "}
            <button
              className="btn"
              class="btn btn-secondary "
              onClick={() => handleButton()}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
