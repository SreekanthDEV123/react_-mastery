export const fetchFilterCuisines = (copyRestaurent) => {
  let cuisinesList = [];
  copyRestaurent.forEach((e) => {
    const isCuisinExists = cuisinesList.find(
      (ele) => ele.cuisineStyle == e.cuisines
    );

    if (isCuisinExists) {
      cuisinesList = cuisinesList.map((eachCuisine) => {
        if (eachCuisine.cuisineStyle == isCuisinExists.cuisineStyle) {
          return { ...eachCuisine, count: eachCuisine.count + 1 };
        }
        return eachCuisine;
      });
    } else {
      cuisinesList.push({
        cuisineStyle: e.cuisines,
        count: 1,
      });
    }
    // return e;
  });
  return cuisinesList;
};
export const fetchFilterPrices = (copyRestaurent) => {
  let pricesList = [];
  // let conditionNumbers = [300, 600, 100];
  copyRestaurent.map((e) => {
    // console.log(e.costForTwo, "kjj");
    const isPriceExists = pricesList.find((ele) => ele.cost == e.costForTwo);
    // console.log(isPriceExists, "300");

    if (isPriceExists) {
      pricesList = pricesList.map((eachCost) => {
        if (eachCost.cost == isPriceExists.cost) {
          return { ...eachCost, Count: eachCost.Count + 1 };
        }
        return eachCost;
      });
    } else {
      pricesList.push({
        cost: e.costForTwo,
        Count: 1,
      });
    }
    return e;
  });
  // console.log(pricesList, "jjjjssnj");
  return pricesList;
};
// utils/restUtils.js

export const CheckSum = (restaurants) => {
  // console.log(restaurants, "values");

  let total = 0;

  // let sum = 0;
  // for (let i = 0; i < restaurants.length; i++) {
  //   sum += restaurants[i];
  // }
  restaurants.forEach((ele) => {
    total = total + ele;
  });

  // console.log(total);

  // console.log(total, "final");

  return total;
};
export const TotalPayment = (restaurants) => {
  // console.log(restaurants, "values");

  let total = 0;

  // let sum = 0;
  // for (let i = 0; i < restaurants.length; i++) {
  //   sum += restaurants[i];
  // }
  restaurants.forEach((ele) => {
    total = total + ele;
  });

  // console.log(total);

  // console.log(total, "final");

  return total;
};

export  const fetchData =async(a)=>{
  const response =await fetch(a)
  const data= await response.json()
  return data;
}