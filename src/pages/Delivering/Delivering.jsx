import { Typography, Box, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../components/CmnButton/CmnButton";
import PromocodePriceDetails from "../MyCart/PromocodePriceDetails";
import { Link } from "react-router-dom";
import { loadAddresses } from "../../shared/store/actions/addressActions";
import { useDispatch, useSelector } from "react-redux";
import ProfileAddress from "../ProfileUpdate/ProfileAddress";

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
    const { user } = useSelector(state => state.getUser);
    const { addresses } = useSelector(state => state.getAddress);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAddresses(user && user.id));
    }, [user && user.id]);

    const loadScript = (src) => new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });

    const payNow = () => {
        var options = {
            key: "rzp_test_hAVuEDTOKZ8ST0", // Key ID generated from the Dashboard
            amount: "10000", // Amount is in currency sub units. Hence, 50000 refers to 50000 paise.
            currency: "INR", // Default currency is INR.
            name: "Flevar", // 
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                // console.log(response.razorpay_payment_id);
                // console.log(response.razorpay_order_id);
                // console.log(response.razorpay_signature);
            },
            prefill: user,
            notes: {
                address: user.address
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', response => { });
        rzp1.open();
    }

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
                                        btntitle="Selected"
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
                                            onClick={() => payNow()}
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
