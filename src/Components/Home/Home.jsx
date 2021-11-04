import React from "react";
import SimpleSlider from "../ProductSlider/SimpleSlider";
import CakesItems from "../CakeItemCard/CakesItems";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import OocassionButton from "./OocassionButton";
import FeaturesPrducts from "./FeaturesPrducts";
import ShopByCategory from "./ShopByCategory";
import homesliderData from "../Data/homesliderData";
import CmnButton from "../CmnButton/CmnButton";
import CustomeContainer from "../CustomeContainer/CustomeContainer";
import DataCustomerReviewSlider from "../Data/DataCustomerReviewSlider";
import DataInstaFameSlider from "../Data/DataInstaFameSlider";
function Home() {
  const settings = {
    className: "home-slider-wrapper",
    fade: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
        },
      },
    ],
  };
  const CustomerReviewSliderSetting = {
    dots: false,
    className: "customer-review-slidersetting",
  };
  const InstaFameSetting = {
    className: "instaFame-wrapper",
    dots: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <CustomeContainer>
        <Box className="slider-wrapper-home">
          <SimpleSlider sliderData={homesliderData} settings={settings} />
        </Box>

        <Box>
          <Box className="title_with_btn">
            <Typography variant="h5">POPULAR CAKES</Typography>
            <CmnButton
              variant="contained"
              className="cmn_btn_with-title"
              endIcon={<ChevronRightIcon />}
              btntitle="view All"
            >
              View All
            </CmnButton>
          </Box>
          <Grid container spacing={3}>
            <CakesItems />
          </Grid>
        </Box>

        <Box>
          <Box className="title_with_btn">
            <Typography variant="h5">SHOP BY CATEGORY</Typography>

            <CmnButton
              variant="contained"
              className="cmn_btn_with-title"
              endIcon={<ChevronRightIcon />}
              btntitle="view All"
            >
              View All
            </CmnButton>
          </Box>
          <Box>
            <ShopByCategory />
          </Box>
        </Box>

        <Box>
          <Box className="title_with_btn">
            <Typography variant="h5">SHOP BY OCCASION</Typography>
          </Box>
          <Box>
            <OocassionButton />
          </Box>
        </Box>
      </CustomeContainer>
      <Box>
        <FeaturesPrducts />
      </Box>

      <CustomeContainer>
        <Box className="review-slider-component-wrapper">
          <SimpleSlider
            sliderData={DataCustomerReviewSlider}
            settings={CustomerReviewSliderSetting}
          />
        </Box>
      </CustomeContainer>

      <CustomeContainer>
        <Box className="title_with_btn">
          <Typography variant="h5">JOIN OUR INSTA FAM</Typography>
        </Box>

        <SimpleSlider
          sliderData={DataInstaFameSlider}
          settings={InstaFameSetting}
        />
      </CustomeContainer>
    </div>
  );
}

export default Home;
