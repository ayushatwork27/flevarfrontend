import React from "react";
import CakeData from "./CakeData";
import SingleCakeItem from "./SingleCakeItem";
function CakesItems(products) {
  console.log("products", products);
  return (
    <>
      {CakeData.map((val, i) => {
        return (
          <SingleCakeItem
            key={i}
            imageurl={val.imageurl}
            productname={val.productname}
            category={val.category}
            sellingprice={val.sellingprice}
            originalprice={val.originalprice}
          />
        );
      })}
    </>
  );
}

export default CakesItems;
