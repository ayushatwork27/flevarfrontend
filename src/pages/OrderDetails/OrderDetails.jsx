import React, { useEffect, useState } from "react";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../components/CmnButton/CmnButton";
import DeliveryDetails from "./DeliveryDetails";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetailAction } from "../../shared/store/actions/order.actions";
import OrderItemDetail from "../../components/Order/OrderItemDetail";
const useStyles = makeStyles((theme) => ({
  cmn_bg: {
    backgroundColor: "rgba(244, 244, 244, 1)",
  },
  order_box_smlltitle: {
    color: "rgba(34, 34, 34, 1)",
    letterSpacing: "-0.31px",
    lineHeight: "25px",
    fontWeight: "600",
    marginBottom: "10px",
    fontSize: "20px",
    [theme.breakpoints.up("xxl")]: {
      fontSize: "25px",
    },
  },
  order_box_smll_title_below_content: {
    color: "rgba(34, 34, 34, 1)",
    fontWeight: "400",
    fontSize: "16x",
    [theme.breakpoints.up("xxl")]: {
      fontSize: "20px",
    },
  },
  order_wrapper: {
    padding: "30px 25px",
    [theme.breakpoints.up("xxl")]: {
      padding: "62px",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "20px",
    },
  },
  order_summary_wrapper: {
    padding: "30px 20px",

    [theme.breakpoints.up("xxl")]: {
      padding: "62px 40px",
    },
  },
  margin_r: {
    marginRight: "10px",
    [theme.breakpoints.up("xxl")]: {
      marginRight: "20px",
    },
  },
  margin_l: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0x",
    },
    [theme.breakpoints.up("xxl")]: {
      marginLeft: "20x",
    },
  },
  margin_x: {
    margin: "0px 12px",
    [theme.breakpoints.up("xxl")]: {
      margin: "0px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "12px 0px",
    },
  },
  details_innerbox: {
    paddingBottom: "53px",
    marginBottom: "53px",
    borderBottom: "1px solid rgb(213 201 201)",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
      marginBottom: "20px",
    },
  },
  cmn_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  single_summary_box: {
    marginBottom: "10px",
    "& p": {
      fontSize: "17px",
      color: "#525050",
    },
    "& h6": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#1D1D1D",
    },
  },
  total_box: {
    borderTop: "1px solid rgb(213 201 201)",
    "& p": {
      fontSize: "26px",
      color: "#525050",
    },
    "& h6": {
      fontSize: "27px",
      fontWeight: "600",
      color: "#1D1D1D",
    },
  },
  download_invoiceBtn_wrapper: {
    margin: "20px 0px",

    "& button": {
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "0",
      width: "100%",
      fontSize: "16px",
      [theme.breakpoints.up("xxl")]: {
        fontSize: "20px",
      },
      "&:hover": {
        backgroundColor: "#000",
      },
    },
  },
  need_help_btn: {
    "& button": {
      backgroundColor: "transparent",
      color: "#222222",
      border: "1px solid rgb(213 201 201)",
      borderRadius: "0",
      width: "100%",
      fontSize: "16px",
      [theme.breakpoints.up("xxl")]: {
        fontSize: "20px",
      },
    },
  },
  delivery_details_step_box: {
    padding: "40px 30px 30px 30px",

    [theme.breakpoints.up("lg")]: {
      marginRight: "20px",
    },
  },
  delivery_details_step_box_bottom_details: {
    borderTop: "1px solid rgb(213 201 201)",
    marginTop: "30px",
    paddingTop: "30px",
  },
  fw_600: {
    fontWeight: 600,
    color: "#222222",
  },
  delivery_details_step_box_trackonlink_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",

    fontWeight: 600,
    "& a": {
      color: "#002B9F",
      textDecoration: "none",
      fontWeight: 600,
      marginLeft: "10px",
      display: "inline-block",
    },
  },
  delivery_details_wrapper: {
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
  },
}));
function OrderDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const { orderDetail } = useSelector((state) => {
    const order = Object.keys(state.order.orderDetail).length
      ? state.order.orderDetail
      : null;
    if (order)
      order.order_items = order.order_items.map((item) => ({
        ...item,
        delivery_date: order.delivery_date,
        delivery_time_range: order.delivery_time_range,
      }));
    return { orderDetail: order };
  });

  useEffect(() => {
    dispatch(getOrderDetailAction(params.id));
  }, []);
  return (
    <CustomeContainer>
      <Grid container>
        <Grid item sm={12} md={7}>
          <Typography variant="h5" className="cmn-pages-title-only">
            ORDER DETAILS
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Grid container>
          <Grid item sm={12} md={9}>
            <Box className={`${classes.cmn_bg} ${classes.order_wrapper}`}>
              <Box className={`${classes.details_innerbox}`}>
                <Grid container>
                  <Grid item sm={12} md={3}>
                    <Box className={classes.margin_r}>
                      <Typography
                        variant="h5"
                        className={classes.order_box_smlltitle}
                      >
                        Delivery Address
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.order_box_smll_title_below_content}
                      >
                        {orderDetail &&
                          orderDetail.address &&
                          orderDetail.address.line_1_address +
                            ", " +
                            orderDetail.address.landmark +
                            ", " +
                            orderDetail.address.pincode}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <Box className={classes.margin_x}>
                      <Box>
                        <Typography
                          variant="h5"
                          className={classes.order_box_smlltitle}
                        >
                          Phone Number
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classes.order_box_smll_title_below_content}
                        >
                          {orderDetail &&
                            orderDetail.address &&
                            orderDetail.address.receiver_contact}
                        </Typography>
                      </Box>
                      <Box mt={2}>
                        <Typography
                          variant="h5"
                          className={classes.order_box_smlltitle}
                        >
                          Message on Cake
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classes.order_box_smll_title_below_content}
                        >
                          {orderDetail && orderDetail.message}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box className={classes.margin_x}>
                      <Typography
                        variant="h5"
                        className={classes.order_box_smlltitle}
                      >
                        Payment Method
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.order_box_smll_title_below_content}
                      >
                        Debit Card
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box className={classes.margin_l}>
                      <Typography
                        variant="h5"
                        className={classes.order_box_smlltitle}
                      >
                        Order ID
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.order_box_smll_title_below_content}
                      >
                        {orderDetail && orderDetail.order_number}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                {orderDetail &&
                  orderDetail.order_items.map((orderItem) => (
                    <OrderItemDetail isOrder={false} order={orderItem} />
                  ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              className={`${classes.cmn_bg} ${classes.order_summary_wrapper}`}
            >
              <Box>
                <Typography
                  variant="h5"
                  className={classes.order_box_smlltitle}
                >
                  Order Summary
                </Typography>
                <Box
                  className={` ${classes.cmn_flex} ${classes.single_summary_box} `}
                >
                  <Typography variant="body1">Price</Typography>
                  <Typography variant="h6">
                    Rs. {orderDetail ? orderDetail["total_product_price"] : 0}
                  </Typography>
                </Box>
                <Box
                  className={` ${classes.cmn_flex} ${classes.single_summary_box} `}
                >
                  <Typography variant="body1">Shipment Price</Typography>
                  <Typography variant="h6">
                    Rs. {(orderDetail && orderDetail["shipment_price"]) || 0}
                  </Typography>
                </Box>
                <Box
                  className={` ${classes.cmn_flex} ${classes.single_summary_box} `}
                >
                  <Typography variant="body1">Tax (5%)</Typography>
                  <Typography variant="h6">
                    Rs.{" "}
                    {orderDetail
                      ? 0.05 * orderDetail["total_product_price"]
                      : 0}
                  </Typography>
                </Box>
                <Box
                  className={` ${classes.cmn_flex} ${classes.single_summary_box} `}
                >
                  <Typography variant="body1">Discount</Typography>
                  <Typography variant="h6">
                    Rs. {orderDetail ? 50 : 0}{" "}
                  </Typography>
                </Box>
                <Box className={` ${classes.cmn_flex} ${classes.total_box} `}>
                  <Typography variant="body1">Total</Typography>
                  <Typography variant="h6">
                    Rs. {orderDetail ? orderDetail["final_price"] : 0}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              className={`${classes.cmn_bg} ${classes.order_summary_wrapper} ${classes.download_invoiceBtn_wrapper}`}
            >
              <CmnButton btntitle="Download Invoice" />
            </Box>
            <Box
              className={`${classes.cmn_bg} ${classes.order_summary_wrapper} ${classes.need_help_btn}`}
            >
              <CmnButton btntitle="Need help ?" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.delivery_details_wrapper}>
        <Grid container>
          <Grid item sm={12} md={7}>
            <Typography variant="h5" className="cmn-pages-title-only">
              DELIVERY DETAILS
            </Typography>
          </Grid>
        </Grid>
        <Box>
          <Grid container>
            <Grid item sm={12} md={9}>
              <Box
                className={`${classes.cmn_bg} ${classes.delivery_details_step_box}`}
              >
                <DeliveryDetails />
                <Box
                  className={classes.delivery_details_step_box_bottom_details}
                >
                  <Grid container>
                    <Grid item sm={9}>
                      <Typography variant="body1" className={classes.fw_600}>
                        Your order has been delivered.
                      </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography
                        variant="body1"
                        className={`${classes.fw_600} ${classes.delivery_details_step_box_trackonlink_box}`}
                      >
                        Track on
                        <Typography variant="body2" component={Link} to="/">
                          Blue Dart
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CustomeContainer>
  );
}

export default OrderDetails;
