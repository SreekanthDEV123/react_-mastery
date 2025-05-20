import React, { useEffect, useState } from "react";
import RestaurentCard from "../../Components/RestarentCard/RestaurentCard";
import "./RestaurentItems.scss";
import {
  fetchFilterCuisines,
  fetchFilterPrices,
  CheckSum,
} from "../../utils/restUtils";
import { LIST_PRICES } from "../../Constants/Prices";
import { useParams } from "react-router-dom";

const RestaurentItems = () => {
  const params = useParams();
  console.log(params, "paramsm");

  const RestaurentList1 = [
    {
      name: "Restaurant 1",
      pay: 0,
      check: 0,
      avgRating: 1.1,
      costForTwo: 198,
      cuisines: "Japanese",
      deliveryTime: 58,
      id: 1,
      description:
        "A small, cozy restaurant offering a variety of traditional Japanese dishes.",
    },
    {
      name: "Restaurant 2",
      pay: 0,
      check: 0,
      avgRating: 2.7,
      costForTwo: 269,
      cuisines: "Indian",
      deliveryTime: 32,
      id: 2,
      description:
        "A vibrant Indian restaurant known for its spicy curries and flavorful biryanis.",
    },
    {
      name: "Restaurant 3",
      pay: 0,
      check: 0,
      avgRating: 1.5,
      costForTwo: 200,
      cuisines: "Italian",
      deliveryTime: 39,
      id: 3,
      description:
        "An Italian eatery offering a selection of pasta, pizza, and homemade desserts.",
    },
    {
      name: "Restaurant 4",
      pay: 0,
      check: 0,
      avgRating: 4.2,
      costForTwo: 450,
      cuisines: "Italian",
      deliveryTime: 56,
      id: 4,
      description:
        "A fine dining Italian restaurant with an extensive wine list and elegant atmosphere.",
    },
    {
      name: "Restaurant 5",
      pay: 0,
      check: 0,
      avgRating: 2.0,
      costForTwo: 500,
      cuisines: "Italian",
      deliveryTime: 47,
      id: 5,
      description:
        "A casual Italian spot serving a variety of pizzas, pastas, and salads.",
    },
    {
      name: "Restaurant 6",
      pay: 0,
      check: 0,
      avgRating: 4.7,
      costForTwo: 600,
      cuisines: "Indian",
      deliveryTime: 46,
      id: 6,
      description:
        "A popular Indian restaurant known for its tandoori dishes and rich gravies.",
    },
    {
      name: "Restaurant 7",
      pay: 0,
      check: 0,
      avgRating: 4.9,
      costForTwo: 987,
      cuisines: "Indian",
      deliveryTime: 35,
      id: 7,
      description:
        "A high-end Indian restaurant offering gourmet cuisine and a luxurious dining experience.",
    },
    {
      name: "Restaurant 8",
      pay: 0,
      check: 0,
      avgRating: 2.4,
      costForTwo: 789,
      cuisines: "Mexican",
      deliveryTime: 53,
      id: 8,
      description:
        "A lively Mexican restaurant with a wide range of tacos, burritos, and margaritas.",
    },
    {
      name: "Restaurant 9",
      pay: 0,
      check: 0,
      avgRating: 2.6,
      costForTwo: 800,
      cuisines: "Japanese",
      deliveryTime: 21,
      id: 9,
      description:
        "A contemporary Japanese restaurant specializing in sushi and sashimi.",
    },
    {
      name: "Restaurant 10",
      pay: 0,
      check: 0,
      avgRating: 4.2,
      costForTwo: 610,
      cuisines: "Japanese",
      deliveryTime: 36,
      id: 10,
      description:
        "A Japanese fusion restaurant offering unique dishes blending traditional and modern flavors.",
    },
  ];

  const [restaurent, setRestaurent] = useState(RestaurentList1);
  const [copyRestaurent, setCopyRestaurent] = useState(RestaurentList1);
  const [maxCost, setMaxCost] = useState(500);
  const [checkString, setCheckString] = useState("");
  const [checkString1, setCheckString1] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");

  // Filtering options
  const filterCuisines = fetchFilterCuisines(copyRestaurent);
  const filterPrices = fetchFilterPrices(copyRestaurent);
  const allItems = CheckSum(restaurent.map((r) => r.check));
  const totalPayment = CheckSum(restaurent.map((r) => r.pay));

  const costs = RestaurentList1.map((r) => r.costForTwo);
  const minimumCost = Math.min(...costs);
  const maximumCost = Math.max(...costs);

  const handleSearch = (a) => {
    setRestaurent(a);
  };

  const handleRangeChange = (e) => {
    setMaxCost(e.target.value);
  };

  const handleFilter = () => {
    const res = copyRestaurent.filter((ele) => {
      return ele.costForTwo > maxCost;
    });
    setRestaurent(res);
  };

  const handleCheckboxChange = (number) => {
    setCheckString(number);
    const res = copyRestaurent.filter((ele) => {
      if (number == 300) {
        return ele.costForTwo <= number;
      } else if (number == 600) {
        return ele.costForTwo > 300 && ele.costForTwo <= number;
      } else {
        return ele.costForTwo > 600 && ele.costForTwo <= number;
      }
    });
    setRestaurent(res);
  };

  const handleRadioboxChange = (cuisine) => {
    setCheckString1(cuisine);
    const res = copyRestaurent.filter((ele) => {
      return ele.cuisines === cuisine;
    });
    setRestaurent(res);
  };

  const handleCuisineChange = (e) => {
    const updatedCuisine = e.target.value;
    setSelectedCuisine(updatedCuisine);
    if (updatedCuisine == "") {
      setRestaurent(copyRestaurent);
    } else if (isNaN(updatedCuisine)) {
      const filteredSelectedCuisine = copyRestaurent.filter((eachCuisine) =>
        eachCuisine.cuisines.includes(updatedCuisine)
      );

      console.log(filteredSelectedCuisine, "handleCuisinehange");
      setRestaurent(filteredSelectedCuisine);
    } else {
      const filteredSelectedCuisine = copyRestaurent.filter(
        (eachCuisine) => eachCuisine.costForTwo < updatedCuisine
      );

      setRestaurent(filteredSelectedCuisine);
    }
  };
  useEffect(() => {
    // Filter effects
    // const totalSum = CheckSum(copyRestaurent);
    // console.log(totalSum, "bodysum");
    // console.log(RestaurentList1, "useeffec");
    // console.log(copyRestaurent, "useeffect");
  }, [filterCuisines, filterPrices, RestaurentList1]);

  return (
    <div>
      <div className="row m-5 ">
        <div className="col-md-2 filterSection">
          <div className="selectcost">
            <h3>Select cost for Apply</h3>
            <h3 htmlFor="customRange1" className="form-label">
              Range prices
            </h3>
            <input
              type="range"
              className="form-range w-50"
              id="customRange1"
              min="0"
              max="1000"
              value={maxCost}
              onChange={handleRangeChange}
            />
            &nbsp;
            <button onClick={handleFilter}>Submit</button>
            <h4> selectedCost: {maxCost}</h4>
            <div className="d-flex justify-content-around">
              <span>mincost: {minimumCost}</span> &nbsp;
              <span>maxcost: {maximumCost}</span>
            </div>
          </div>
          <div className="checkboxes">
            <h3>Select Prices: ✅</h3>
            {LIST_PRICES.map((eachprice) => (
              <h5 key={eachprice.value}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={eachprice.value}
                  checked={checkString === eachprice.value}
                  onChange={() => handleCheckboxChange(eachprice.value)}
                />
                {eachprice.name}
              </h5>
            ))}
            {checkString.length > 0 && <h4>{checkString}</h4>}
          </div>
          <div>
            <h3>selected cuisines</h3>
            {filterCuisines.map((ele, index) => (
              <h5 key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  value={ele.cuisineStyle}
                  checked={checkString1 === ele.cuisineStyle}
                  onChange={() => handleRadioboxChange(ele.cuisineStyle)}
                />
                {ele.cuisineStyle}-({ele.count})
              </h5>
            ))}
          </div>
          <div className="cost">
            <h4>Total Items: {allItems}</h4>
            <h4>TotalPayment: {totalPayment}</h4>
          </div>
        </div>
        <div className="col-md-9 cardsSection">
          <div className="row">
            <div>
              <input
                type="text"
                name="selectedCuisine"
                value={selectedCuisine}
                onChange={handleCuisineChange}
                className="searchCuisine "
                placeholder="Enter your Favourite Cuisine"
              />
            </div>

            {restaurent.length > 0 &&
              restaurent.map((ele, index) => (
                <RestaurentCard
                  key={index}
                  res={ele}
                  handleSearch={handleSearch}
                  restaurent={restaurent}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentItems;
