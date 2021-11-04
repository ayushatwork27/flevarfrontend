import React from "react";
import Slider from "react-slick";
import sliderData from "../Data/homesliderData";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CmnButton from "../CmnButton/CmnButton";
const useStyles = makeStyles((theme) => ({
  homemainsliderimage: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
    },
  },
}));

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    // <div >
    <img
      src="/assets/images/icons/right-slider-arrow.svg"
      className={`cmn-arrow ${className}`}
      onClick={onClick}
      alt="right arrow"
    />
    // </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src="/assets/images/icons/left-slider-arrow.svg"
      alt="left  arrow"
      className={`cmn-arrow ${className}`}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider(props) {
  const classes = useStyles();
  var commanSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  let abc = { ...commanSetting, ...props.settings };
  return (
    <Slider {...abc}>
      {props.sliderData &&
        props.sliderData.map((val, i) => {
          return (
            // <SingleSlider
            //   key={i}
            //   smallTitle={val.smallTitle}
            //   mailTitle={val.mailTitle}
            //   imagesrc={val.imagesrc}
            // />
            <div>
              <Grid container className="slider-wrapper">
                {val.megaSlider && (
                  <Grid item xs={12} md={6} lg={6} className="order-md-2">
                    <Box className="slider-description">
                      <Typography
                        variant="body1"
                        className="home-main-slider-small-titile"
                      >
                        {val.smallTitle}
                      </Typography>
                      <Typography
                        variant="h2"
                        className="home-main-slider-big-titile"
                      >
                        {val.mailTitle}
                      </Typography>
                      <Box className="home-slider-btn-wrapper">
                        <CmnButton
                          btntitle="Shop Now"
                          variant="contained"
                          className="theme-contained-btn"
                        />
                        <CmnButton
                          btntitle="Watch Video"
                          variant="outlined"
                          className="theme-outline-btn watch-video-btn"
                          startIcon={<PlayCircleOutlineIcon />}
                        />
                      </Box>
                    </Box>
                  </Grid>
                )}

                {val.megaSlider && (
                  <Grid item xs={12} md={6} lg={6} className="order-md-1">
                    <img
                      src={val.imagesrc}
                      alt="sliderpicture"
                      className={classes.homemainsliderimage}
                    />
                  </Grid>
                )}

                {val.revieSlider && (
                  <Grid item xs={12} className="review-wrapper-grid">
                    <Box className="review-box">
                      <Typography variant="h3">{val.review}</Typography>
                      <Typography variant="boddy">
                        - {val.reviewername}
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </div>
          );
        })}
    </Slider>
  );
}
