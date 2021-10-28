import React from "react";
import Slider from "react-slick";
import sliderData from "./SliderDate";
import SingleSlider from "./SingleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      {/*      
  {sliderData.map((key,i)=>{
      return<>
        <SingleSlider
        key={i}
  smallTitle={val.smallTitle}
  mailTitle={val.mailTitle}
  imagesrc={val.imagesrc}
  }) */}
    </Slider>
  );
}
