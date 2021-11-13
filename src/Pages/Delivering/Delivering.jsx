import { Typography, Box, Grid } from "@material-ui/core";
import React from "react";
import CustomeContainer from "../../Components/CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../Components/CmnButton/CmnButton";
import PromocodePriceDetails from "../MyCart/PromocodePriceDetails";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  // mycart_wrapper: {
  //   marginTop: "3%",
  // },
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
      color: "#525050",
      marginTop: "5px",
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
}));
function Delivering() {
  const classes = useStyles();

  return (
    <CustomeContainer>
      <Box className={classes.mycart_wrapper}>
        <Typography variant="h5" className={classes.cart_main_title}>
          DELIVERING TO
        </Typography>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={7}>
              <Box className={classes.addressSingeBox}>
                <Box className={classes.address}>
                  <Typography variant="h5">My Home</Typography>
                  <Typography variant="body2">
                    49,VIP Enclave,Baguiati,Kolkata 700959
                  </Typography>
                </Box>
                <Box>
                  <CmnButton
                    btntitle="Select"
                    className={` ${classes.selected_text}`}
                  />
                </Box>
              </Box>
              <Box className={classes.addressSingeBox}>
                <Box className={classes.address}>
                  <Typography variant="h5">Friend Home</Typography>
                  <Typography variant="body2">
                    49,VIP Enclave,Baguiati,Kolkata 700959
                  </Typography>
                </Box>
                <Box>
                  <CmnButton
                    btntitle="Selectd"
                    className={` ${classes.notselected_text}`}
                  />
                </Box>
              </Box>
              <Box className={classes.addressSingeBox}>
                <Box className={classes.address}>
                  <Typography variant="h5">Add a new Address</Typography>
                </Box>
                <Box>
                  <CmnButton
                    btntitle="add new"
                    className={` ${classes.addnewBtn}`}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Box className={classes.promo_code_price_details_wrapper}>
                <PromocodePriceDetails />
                <Box>
                  <Box
                    className={classes.checkoutBtn}
                    component={Link}
                    to="/delevering"
                  >
                    <CmnButton
                      btntitle="pay now"
                      variant="contained"
                      className="theme-contained-btn"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CustomeContainer>
  );
}

export default Delivering;
