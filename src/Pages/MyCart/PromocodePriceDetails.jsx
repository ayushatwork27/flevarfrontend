import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../Components/CmnButton/CmnButton";

const useStyles = makeStyles((theme) => ({
  promo_code_price_details_wrapper: {
    marginTop: "30px",
    marginLeft: "20px",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  promo_code_title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  promocode_wrapper: {
    display: "flex",
    alignItems: "center",
  },
  promocode_input: {
    border: "1px solid #707070",
    paddingLeft: "5px",
    maxWidth: "336px",
    width: "100%",
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "280px",
    },
  },
  applybtn: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "5px 20px !important",
    marginLeft: "15px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  },
  promo_helper_text: {
    color: "#222",
    marginTop: "5px",
  },
  price_details_title: {
    margin: "30px 0px 10px 0px",
  },
  totalQuantity: {
    color: "#525050",
    fontWeight: 300,
  },
  cmn_price_discount_amount_main_ceontainer: {
    borderTop: "1px solid #f4f4f4",
    paddingTop: "13px",
    marginTop: "13px",
    maxWidth: "435px",
  },

  cmn_price_discount_amount_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
    maxWidth: "435px",
  },

  cmn_price_discount_amount_title: {
    color: "#525050",
    fontWeight: 300,
  },
  cmn_price_discount_amount_value: {
    color: "#222",
    fontWeight: 600,
  },
  total: {
    fontSize: "20px",
  },

  checkoutBtn: {
    textAlign: "right",
    marginTop: "15px",
    marginLeft: "auto",
    display: "inherit",
  },
}));
function PromocodePriceDetails() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.promo_code_price_details_wrapper}>
        <Box className={classes.promo_code_wrapper}>
          <Typography variant="h5" className={classes.promo_code_title}>
            Apply Promo Code
          </Typography>
          <Box className={classes.promocode_wrapper}>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.promocode_input}
                disableUnderline="true"
              />
            </form>
            <CmnButton className={classes.applybtn} btntitle="apply" />
          </Box>
          <Typography variant="body2" className={classes.promo_helper_text}>
            NEW5000 Code has been applied.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            className={`${classes.promo_code_title} ${classes.price_details_title}`}
          >
            Price Details
          </Typography>
          <Typography variant="body1" className={classes.totalQuantity}>
            Total Quantity : 2
          </Typography>
        </Box>
        <Box className={classes.cmn_price_discount_amount_main_ceontainer}>
          <Box
            className={`flex-wraper ${classes.cmn_price_discount_amount_wrapper}`}
          >
            <Typography
              variant="body1"
              className={classes.cmn_price_discount_amount_title}
            >
              Price
            </Typography>
            <Typography
              variant="body1"
              className={classes.cmn_price_discount_amount_value}
            >
              Rs. 1,240
            </Typography>
          </Box>
          <Box
            className={`flex-wraper ${classes.cmn_price_discount_amount_wrapper}`}
          >
            <Typography
              variant="body1"
              className={classes.cmn_price_discount_amount_title}
            >
              Discount
            </Typography>
            <Typography
              variant="body1"
              className={classes.cmn_price_discount_amount_value}
            >
              Rs. 50
            </Typography>
          </Box>
          <Box
            className={`flex-wraper ${classes.cmn_price_discount_amount_wrapper}`}
          >
            <Typography
              variant="body1"
              className={classes.cmn_price_discount_amount_title}
            >
              Amount Payable
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.cmn_price_discount_amount_value} ${classes.total}`}
            >
              Rs. 1,190
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PromocodePriceDetails;
