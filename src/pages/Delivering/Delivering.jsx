import { Typography, Box, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../components/CmnButton/CmnButton";
import PromocodePriceDetails from "../MyCart/PromocodePriceDetails";
import { Link } from "react-router-dom";
import { getAddressListAction } from "../../shared/store/actions/app.actions";
import { useDispatch, useSelector } from "react-redux";
import PaymentButton from "./PaymentButton";
import { addAddressIdAction, addAddressPincodeAction } from "../../shared/store/actions/cart.actions";

const useStyles = makeStyles((theme) => ({
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
const Delivering = () => {
    const classes = useStyles();
    const { user, addressList } = useSelector(state => state.app);
    const { address_id } = useSelector(state => state.cart);
    let dispatch = useDispatch();
    useEffect(() => {
        if (user && user.id) dispatch(getAddressListAction(user.id));
    }, [user && user.id]);

    const loadScript = (src) => new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });

    const selectAddress = address => {
        dispatch(addAddressPincodeAction(address.pincode));
        dispatch(addAddressIdAction(address.id));
    }

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });

    return (
        <CustomeContainer>
            <Box className={classes.mycart_wrapper}>
                <Typography variant="h5" className={classes.cart_main_title}>
                    DELIVERING TO
                </Typography>
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7}>
                            {addressList && addressList.map(address => (
                                <Box className={classes.addressSingeBox}>
                                    <Box className={classes.address}>
                                        <Typography variant="h5" style={{ textTransform: 'capitalize' }}>{address.address_name}</Typography>
                                        <Typography variant="body2" style={{ textTransform: 'capitalize' }}>
                                            {`${address.line_1_address}, ${address.line_2_address}, ${address.pincode}`}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <CmnButton
                                            btntitle={address.id === address_id ? 'Selected' : 'Select'}
                                            className={` ${address.id === address_id ? classes.selected_text : classes.notselected_text}`}
                                            onClick={() => selectAddress(address)}
                                        />
                                    </Box>
                                </Box>
                            ))}
                            <Box className={classes.addressSingeBox}>
                                <Box className={classes.address}>
                                    <Typography variant="h5">Add a new Address</Typography>
                                </Box>
                                <Box>
                                    <CmnButton
                                        btntitle="add new"
                                        component={Link}
                                        to="/add_new_address"
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
                                        <PaymentButton />
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
