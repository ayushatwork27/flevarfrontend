import React from "react";
import Slider from "react-slick";
import SingleSlider from "./SingleSlider";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <SingleSlider />
    </Slider>
  );
}
export default SimpleSlider;
