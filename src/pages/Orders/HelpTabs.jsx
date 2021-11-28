import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  //   mycart_wrapper: {
  //     marginTop: "3%",
  //   },
  cart_main_title: {
    fontSize: "26px",
    letterSpacing: "0px",
    color: "#222",
    fontWeight: 600,
    lineHeight: "47px",
    marginBottom: "20px",
  },
  addressSingeBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid  #D8D8D8",
    padding: "10px 25px",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 10px",
    },
  },
  notselected_text: {
    color: "#D8D8D8",
  },
  selected_text: {
    color: "#90EE90",
  },
  address: {
    "& h5": {
      color: "#222",
      fontWeight: "600",
    },

    "& p": {
      color: "rgba(34, 34, 34, 0.5)",
      marginTop: "5px",
      fontWeight: 500,
    },
  },
  addnewBtn: {
    color: "#525050",
  },
  checkoutBtn: {
    textAlign: "right",
    marginTop: "15px",
    marginLeft: "auto",
    display: "inherit",
  },
  response: {
    color: "#ec8287",
  },
  close: {
    color: "rgba(34, 34, 34, 0.34)",
  },
}));

function HelpTabs() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} xs={8}>
            <Box className={classes.addressSingeBox}>
              <Box className={classes.address}>
                <Typography variant="h5">Order #24245</Typography>
                <Typography variant="body2">Order on 18th Sep 2021</Typography>
              </Box>
              <Box>
                <Typography variant="body2" className={classes.response}>
                  1 Response
                </Typography>
              </Box>
            </Box>
            <Box className={classes.addressSingeBox}>
              <Box className={classes.address}>
                <Typography variant="h5">Order #24245</Typography>
                <Typography variant="body2">Order on 18th Sep 2021</Typography>
              </Box>
              <Box>
                <Typography variant="body2" className={classes.close}>
                  Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HelpTabs;
