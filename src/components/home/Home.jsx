import { Typography } from "@material-ui/core";
import React from "react";
import Sliders from "./SliderData";
import sliderdata from "./SliderData";
function Home() {
  return (
    <>
      <Typography variant="h6">Home component</Typography>

      {sliderdata.map((val, i) => {
        return (
          <Sliders
            key={i}
            slidersmlltitle={val.slidersmlltitle}
            slidermaintittle={val.slidermaintittle}
            sliderimage={val.sliderimage}
          />
        );
      })}
    </>
  );
}

export default Home;
