import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrape",
    width: "100%",
  },
  single_services_box: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    minWidth: "155px",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "22px",
    },

    "& img": {
      marginBottom: "10px",
      display: "inline-block",
    },
    "& p": {
      color: "rgba(75, 70, 46, 1)",
      fontSize: "16px",
      display: "inline-block",
    },
  },
}));

const DataCustomerReviewSlider = [
  {
    imagesrc: "/assets/images/icons/organic.svg",
    imgetitle: "CERTIFIED ORGANIC",
  },
  {
    imagesrc: "/assets/images/icons/vegan.svg",
    imgetitle: "VEGAN FRIENDLY",
  },
  {
    imagesrc: "/assets/images/icons/delivery.svg",
    imgetitle: "SUPER FAST DELIVERY",
  },
  {
    imagesrc: "/assets/images/icons/organic.svg",
    imgetitle: "VIEW BEFORE ORDER",
  },
  {
    imagesrc: "/assets/images/icons/vegan.svg",
    imgetitle: "EXTREMELY DELICIOUS",
  },
];

function Service() {
  const classes = useStyles();
  return (
    <Box className={`flex-wraper ${classes.root}`}>
      {DataCustomerReviewSlider.map((val, i) =>
        <Box className={classes.single_services_box} key={i}>
          <img src={val.imagesrc} alt={val.imagesrc} />
          <Typography variant="body2">{val.imgetitle}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Service;
