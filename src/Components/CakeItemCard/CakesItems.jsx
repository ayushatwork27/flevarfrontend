import React from "react";
import SingleCakeItem from "./SingleCakeItem";

function CakesItems(products) {
    return (
        <>
            {products.products && products.products.map((val, i) => {
                return (
                    <SingleCakeItem
                        key={val.id}
                        id={val.id}
                        imageurl={val.product_png_images && val.product_png_images[0] && val.product_png_images[0].url}
                        productname={val.name}
                        category={val.product_category && val.product_category.name}
                        sellingprice={val.mrp}
                        originalprice={val.mrp}
                        products={val.products}
                    />
                );
            })}
        </>
    );
}

export default CakesItems;
