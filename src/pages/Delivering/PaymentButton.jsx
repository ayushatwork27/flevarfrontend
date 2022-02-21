import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CmnButton from "../../components/CmnButton/CmnButton";
import flevar from "../../api/api";
import {
    PLACE_ORDER_API,
    VERIFY_ORDER_API,
} from "../../shared/constants/api-routes.constants";
import { useHistory } from "react-router";
import {
    ADDRESS_ID,
    CAKE_WEIGHT,
    CART_ID,
    CART_TOKEN,
    COUPON_CODE,
    DELIVERY_DATE,
    DELIVERY_TIME_RANGE,
    SHIPMENT_PRICE,
    SHIPMENT_TYPE,
    PINCODE
} from "../../shared/constants/app.constants";
import { clearCartAction } from "../../shared/store/actions/cart.actions";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
    dialog_title: {
        padding: "10px 15px",
        borderBottom: "1px solid #80808059",
        "& h2": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        "& svg": {
            cursor: "pointer",
            paddingLeft: "5px",
        },
    },
    dialog_content: {
        padding: "50px",
    },
}));

function PaymentButton() {
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector((state) => state.app.user);
    const dispatch = useDispatch();
    const [openAlertView, setAlertView] = useState(false);
    const {
        cartItems,
        cart_id,
        address_pincode,
        address_id,
        shipment_type,
        shipment_price,
        delivery_date,
        delivery_time_range,
        coupon_code,
    } = useSelector((state) => state.cart);
    const placeOrder = async () => {
        const payload = {
            cart_id: Number(cart_id),
            address_id: Number(address_id),
            delivery_date,
            delivery_time_range,
            shipment_type,
            shipment_price,
            special_instruction: "No special Instructions",
            coupon_code,
            total_discount: 50,
            payment_vendor: "razorpay",
            pincode: address_pincode,
        };
        const location_pincode = localStorage.getItem(PINCODE);
        if (+location_pincode === +address_pincode) {
            const options = {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            };
            const order_verification = await flevar.post(VERIFY_ORDER_API, payload, options);
            if (order_verification["data"]["success"]) payNow(payload);
        } else setAlertView(true);
    };

    const handleCloseAlertView = () => setAlertView(false);
    const payNow = (payload) => {
        var options = {
            key: "rzp_test_hAVuEDTOKZ8ST0", // Key ID generated from the Dashboard
            amount:
                (cartItems[0]["total_amount"] +
                    Number(shipment_price) +
                    Math.trunc(0.05 * cartItems[0]["total_amount"]) -
                    payload.total_discount) *
                100, // Amount is in currency sub units. Hence, 50000 refers to 50000 paise.
            currency: "INR", // Default currency is INR.
            name: "Flevar", //
            handler: function (response) {
                // setPaymentToken(response.razorpay_payment_id);
                payload["online_payment_id"] = response.razorpay_payment_id;
                payload["cart_items"] = cartItems[0]["cart_items"].map(
                    ({ id, product_id, list_price, quantity, cake_weight, cake_message }) => ({
                        cart_item_id: id,
                        product_id,
                        quantity,
                        price: list_price,
                        weight: cake_weight,
                        message: cake_message || 'NA'
                    })
                );
                flevar.post(PLACE_ORDER_API, payload).then((response) => {
                    [
                        CART_TOKEN,
                        CART_ID,
                        CAKE_WEIGHT,
                        COUPON_CODE,
                        ADDRESS_ID,
                        DELIVERY_DATE,
                        DELIVERY_TIME_RANGE,
                        SHIPMENT_TYPE,
                        SHIPMENT_PRICE,
                    ].forEach((item) => localStorage.removeItem(item));
                    dispatch(clearCartAction());
                    if (response["data"]["success"]) history.push("/orders");
                });
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: user.mobile,
            },
            notes: {
                // address: user.address
            },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", (response) => { });
        rzp1.open();
    };

    return (
        <CustomeContainer>
            <Dialog
                open={openAlertView}
                onClose={handleCloseAlertView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.dialog_title}>
                    {"Pincode Validation"}
                    <HighlightOffIcon onClick={handleCloseAlertView} />
                </DialogTitle>
                <DialogContent className={classes.dialog_content}>
                    <Box className="location-wrapperbox">
                        <Grid container className="home-onhover-location-right-wrapper">
                            Location and selected adress pincode is not same.
                        </Grid>
                    </Box>
                </DialogContent>
            </Dialog>
            <CmnButton
                btntitle="pay now"
                variant="contained"
                className="theme-contained-btn"
                onClick={() => placeOrder()}
            />
        </CustomeContainer>
    );
}

export default PaymentButton;
