import React from "react";
import Slider from "react-slick";
import sliderData from "./SliderDate";
import SingleSlider from "./SingleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="home-slider-arrow  home-next-arrow" onClick={onClick}>
      <img
        src="/assets/images/icons/right-slider-arrow.svg"
        alt="right arrow"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="home-slider-arrow home-pre-arrow" onClick={onClick}>
      <img src="/assets/images/icons/left-slider-arrow.svg" alt="left  arrow" />
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {sliderData.map((val, i) => {
        return (
          <SingleSlider
            key={i}
            smallTitle={val.smallTitle}
            mailTitle={val.mailTitle}
            imagesrc={val.imagesrc}
          />
        );
      })}
    </Slider>
  );
}
