import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import CmnButton from "../../components/CmnButton/CmnButton";

const useStyles = makeStyles((theme) => ({
  featuresproductright_wrapper: {
    height: "100%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    padding: "15px",
  },

  verticalline: {
    width: "2px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: "0px 58px 0px 58px",
  },
  features_text_light: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  featureres_smalltitle: {
    marginBottom: "12px",
    letterSpacing: "3px",
    fontSize: "19px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  featureres_bigtitle: {
    marginBottom: "20px",
    fontWeight: 600,
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  features_start_upto_wrapper: {
    display: "flex",
    flexWrap: "wrape",
    "& div": {
      marginBottom: "5px",
    },
    "& p": {
      marginBottom: "10px",
      fontSize: "13px",
      letterSpacing: "2.3px",
    },
    "& h4": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  },
  feature_description: {
    marginTop: "37px",
    marginBottom: "3%",
    fontSize: "13px",
  },
  feature_bottom_details_wrapper: {
    backgroundColor: "rgba(36, 36, 36, 1)",
    color: "rgba(170, 170, 170, 1)",
    textAlign: "center",
  },
  feature_bottom_single_box: {
    padding: "50px 50px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 15px",
    },
    "& h5": {
      marginBottom: "20px",
    },
    "& p": {
      fontSize: "17px",
      color: "rgba(170, 170, 170, 1)",
    },
  },
  feature_bottom_grid_wrapper: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));
function FeaturesPrducts() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box>
            <img src="/assets/images/featured-product.png" alt="featured" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.featuresproductright_wrapper}>
            <Typography
              variant="body1"
              className={`${classes.features_text_light} ${classes.featureres_smalltitle}`}
            >
              ORIGINAL CAKES BY FLEV
            </Typography>
            <Typography
              variant="h2"
              className={` ${classes.featureres_bigtitle}`}
            >
              Korean Spread
            </Typography>
            <Box className={classes.features_start_upto_wrapper}>
              <Box>
                <Typography
                  variant="body2"
                  className={`${classes.features_text_light}`}
                >
                  STARTING AT
                </Typography>
                <Typography variant="h4">RS. 1,299</Typography>
              </Box>
              <Box className={classes.verticalline}></Box>
              <Box>
                <Typography
                  variant="body2"
                  className={`${classes.features_text_light}`}
                >
                  UPTO
                </Typography>
                <Typography variant="h5">35% OFF</Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              className={`${classes.features_text_light} ${classes.feature_description}`}
            >
              LOREM IPSUM DOLOR APPLY HERE OKAY
            </Typography>

            <CmnButton
              btntitle="Order Now"
              variant="contained"
              className="theme-contained-btn"
            />
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.feature_bottom_details_wrapper}>
        <Grid container className={classes.feature_bottom_grid_wrapper}>
          <Grid item sm={12} md={4}>
            <Box className={classes.feature_bottom_single_box}>
              <Typography variant="h5">travelxp</Typography>
              <Typography variant="body1">
                “Amazing cakes worth every penny”
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box className={classes.feature_bottom_single_box}>
              <Typography variant="h5">travelxp</Typography>
              <Typography variant="body1">
                “Bakery offers classic desserts made entirely from scratch with
                natural ingredients.”
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box className={classes.feature_bottom_single_box}>
              <Typography variant="h5">The celegraph</Typography>
              <Typography variant="body1">
                “ Time to taste the Best cakes in the city ”
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FeaturesPrducts;
