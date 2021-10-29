import { Grid } from "@material-ui/core";
import React from "react";
import CakeData from "./CakeData";
import SingleCakeItem from "./SingleCakeItem";
function CakesItems() {
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
