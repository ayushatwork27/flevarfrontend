import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import CustomeContaier from "../CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  footer_left_link_wrapper: {
    marginTop: "5px",
    display: "flex",
    flexFlow: "column",
    "& a": {
      color: "#4E2022",
      fontSize: "16px",
      marginBottom: "6px",
    },
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <CustomeContaier>
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <Box>
                <Typography variant="h6">Lorem Ipsum</Typography>
                <Box className={classes.footer_left_link_wrapper}>
                  <Link to="/">cakes liberary</Link>
                  <Link to="/">Lorem Ipsum</Link>
                  <Link to="/">Lorem Ipsum</Link>
                  <Link to="/">Lorem Ipsum</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box>
                <Typography variant="h4">What’s Baking?</Typography>
                <Typography variant="body2">
                  Subscribe to our newsletter
                </Typography>
                <Box className={classes.footer_left_link_wrapper}>
                  <Link to="/">cakes liberary</Link>
                  <Link to="/">Lorem Ipsum</Link>
                  <Link to="/">Lorem Ipsum</Link>
                  <Link to="/">Lorem Ipsum</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box></Box>
            </Grid>
          </Grid>
        </CustomeContaier>
      </Box>
    </>
  );
}

export default Footer;
