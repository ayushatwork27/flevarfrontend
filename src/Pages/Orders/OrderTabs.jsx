import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../Components/CmnButton/CmnButton";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  d_flex: {
    display: "flex",
    alignItems: "center",
  },
  sellingprice: {
    marginRight: "5px",
    color: "#222",
    fontWeight: 600,
    fontSize: "27px",
    marginRight: "18px",
  },
  originalprice: {
    textDecoration: "line-through",
    color: "#C6C6C6",
    fontSize: "16px",
  },
  ratinbox: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px 5px 0px",
    "& p": {
      marginLeft: "5px",
      color: "#8D8D8D",
    },
  },
  order_item_image: {
    maxWidth: "161px",
  },
  between: {
    justifyContent: "space-between",
  },
  order_discription: {
    width: "100%",
    marginLeft: "20px",
    "& h5": {
      paddingLeft: "4px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  mr_2: {
    marginRight: "10px",
  },
  fw_bold: {
    fontWeight: 600,
    color: "#222",
  },
  order_single_box: {
    borderBottom: "1px solid #F4F4F4",
    padding: "10px 0px",
    width: "100%",
  },
}));
function OrderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(5);
  return (
    <>
      <Box>
        <Box
          className={` ${classes.d_flex} ${classes.order_single_box} xs-wrape`}
        >
          <Box className={classes.order_item_image}>
            <img src="/assets/images/description.png" alt="description" />
          </Box>
          <Box className={classes.order_discription}>
            <Box
              className={`flex-wraper ${classes.d_flex} ${classes.between} `}
            >
              <Typography variant="h5" className={classes.fw_bold}>
                Mango Delight Cake
              </Typography>
              <Box className={`flex-wraper ${classes.d_flex}`}>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  className={classes.sellingprice}
                >
                  Rs.999
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.originalprice}
                >
                  Rs.1079
                </Typography>
              </Box>
            </Box>
            <Box
              component="fieldset"
              borderColor="transparent"
              className={classes.ratinbox}
            >
              <Rating name="read-only" value={value} readOnly />
              <Typography variant="body2">32 Ratings</Typography>
            </Box>
            <Box className={`flex-wraper ${classes.d_flex} ${classes.between}`}>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className="delivery_dates_dots"
              >
                Delivered on 19th Aug 2021
              </Typography>
              <Box className={`flex-wraper ${classes.d_flex}`}>
                <CmnButton
                  btntitle="Review"
                  variant="outlined"
                  className={` ${classes.mr_2}`}
                />
                <CmnButton
                  btntitle="Re-Order"
                  variant="contained"
                  className="theme-contained-btn"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OrderTabs;
