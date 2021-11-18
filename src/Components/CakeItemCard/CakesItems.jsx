import React from "react";
import CakeData from "./CakeData";
import SingleCakeItem from "./SingleCakeItem";

function CakesItems(products) {
  return (
    <>
      {products.products.map((val, i) => {
        return (
          <SingleCakeItem
            key={i}
            imageurl={val.product_png_images[0].url}
            productname={val.name}
            category={val.product_category.name}
            sellingprice={val.mrp}
            originalprice={val.mrp}
          />
        );
      })}
    </>
  );
}

export default CakesItems;
