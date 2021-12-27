import { Typography, Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import CmnButton from "../../components/CmnButton/CmnButton";
import PromocodePriceDetails from "./PromocodePriceDetails";
import { Link, useHistory } from "react-router-dom";
import { getCartAction, deleteItemFromCartAction } from "../../shared/store/actions/cart.actions"
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
    cart_main_title: {
        fontSize: "26px",
        letterSpacing: "0px",
        color: "#222",
        fontWeight: 600,
        lineHeight: "47px",
        marginBottom: "20px",
    },
    cart_product_title_with_btn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrape: "wrape",
        "& h3": {
            [theme.breakpoints.down("sm")]: {
                marginBottom: "10px",
            },
        },
    },

    cart_product_title: {
        fontSize: "25px",
        fontWeight: "600",
        textTransform: 'capitalize'
    },

    popolarcakepricing: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        "& p": {
            marginBottom: "8px",
        },
    },
    sellingprice: {
        marginRight: "5px",
        color: "#222",
        fontWeight: 600,
        fontSize: "40px",
        marginRight: "18px",
    },
    originalprice: {
        textDecoration: "line-through",
        color: "#C6C6C6",
        fontSize: "30px",
    },
    Product_description_wrapper: {
        marginTop: "50px",
    },
    Product_description_details_wrapper: {
        marginTop: "20px",
    },
    Product_description_largerimage: {
        textAlign: "center",
    },
    ratinbox: {
        display: "flex",
        alignItems: "center",
        margin: "10px 0px",
        "& p": {
            marginLeft: "5px",
            color: "#8D8D8D",
        },
    },
    mycart_product: {
        backgroundColor: "#F4F4F4",
        padding: "20px",
        [theme.breakpoints.up("xl")]: {
            padding: "40px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "12px",
        },
    },
    price_title_message_wrapper: {
        marginLeft: "20px",
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        [theme.breakpoints.up("xl")]: {
            padding: "40px",
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0px",
        },
    },
    removeBtn: {
        color: "#B4B4B4",
    },
    cartBirthdayMessage: {
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "8px 20px",
        [theme.breakpoints.up("lg")]: {
            marginLeft: "20px",
        },
    },
    qtyLabel: {
        paddingBottom: "5px",
        fontSize: "15px",
        fontWeight: "600"
    },
    checkoutBtn: {
        textAlign: "right",
        marginTop: "15px",
        marginLeft: "auto",
        display: "inherit",
    },
    dialog_title: {
        padding: "10px 15px",
        borderBottom: "1px solid #80808059",
        "& h2": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        "& svg": {
            cursor: "pointer",
            paddingLeft: "5px"
        }
    },
    dialog_content: {
        padding: "50px"
    }
}));

const productLists = [];

function MyCart() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [openAlertView, setAlertView] = useState(false);

    useEffect(() => {
        dispatch(getCartAction());
    }, []);

    const { products } = useSelector(state => state.product);
    const { cartItems, delivery_date, delivery_time_range } = useSelector(state => state.cart);

    cartItems.forEach(item => {
        const prodIndex = item['cart_items'] && item['cart_items'].length && products.findIndex(prod => prod.id === item['cart_items'][0]['product_id']);
        if (prodIndex > -1 && item['cart_items'] && item['cart_items'].length) productLists.push(products[prodIndex]);
    });

    const removeItemFromCart = (product_id) => {
        dispatch(deleteItemFromCartAction(product_id));
    }

    const proceedToCheckOut = () => {
        if (delivery_date && delivery_time_range) history.push('/delevering');
        else setAlertView(true);
    }

    const handleCloseAlertView = () => setAlertView(false);

    return (
        <CustomeContainer>
            <Box className={classes.mycart_wrapper}>
                <Typography variant="h5" className={classes.cart_main_title}>
                    My Cart
                </Typography>
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7}>
                            {
                                cartItems && cartItems.length && cartItems[0]['cart_items'].map(cartItem => (
                                    cartItem['cart_items'] && !cartItem['cart_items'].length ? null :
                                        <Grid container key={cartItem.id} className={classes.mycart_product} style={{ marginBottom: '8px' }}>
                                            <Grid item xs={12} sm={4} md={4}
                                                component={Link}
                                                to={{
                                                    pathname: "/productdescription/" + cartItem.product_id
                                                }}
                                            >
                                                <img src="/assets/images/description.png" alt="description" />
                                            </Grid>
                                            <Grid item xs={12} sm={8} md={8}>
                                                <Box className={classes.price_title_message_wrapper}>
                                                    <Box className={classes.cart_product_title_with_btn}>
                                                        <Typography
                                                            variant="h3"
                                                            className={classes.cart_product_title}
                                                        >
                                                            {cartItem['product_name']}
                                                        </Typography>
                                                        <CmnButton
                                                            btntitle="Remove"
                                                            className={classes.removeBtn}
                                                            onClick={() => removeItemFromCart(cartItem['id'])}
                                                        />
                                                    </Box>
                                                    <Box
                                                        component="fieldset"
                                                        borderColor="transparent"
                                                        className={classes.ratinbox}
                                                    >
                                                        <Rating name="read-only" value={cartItem['product_rating']} readOnly />
                                                        <Typography variant="body2">{cartItem['total_rated_by']} Ratings</Typography>
                                                    </Box>
                                                    <Box
                                                        className={`flex-wraper ${classes.popolarcakepricing}`}
                                                    >
                                                        <Typography
                                                            variant="h5"
                                                            color="textSecondary"
                                                            component="p"
                                                            className={classes.sellingprice}
                                                        >
                                                            Rs.{cartItem['mrp']}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            color="textSecondary"
                                                            component="p"
                                                            className={classes.originalprice}
                                                        >
                                                            Rs.{cartItem['list_price']}
                                                        </Typography>
                                                        {
                                                            cartItem && cartItem['cake_message'] && <Typography
                                                                variant="body1"
                                                                color="textSecondary"
                                                                component="p"
                                                                className={classes.cartBirthdayMessage}
                                                            >
                                                                {cartItem['cake_message'] || 'NA'}
                                                            </Typography>
                                                        }
                                                    </Box>
                                                    <Box>
                                                        <Typography
                                                            variant="body1"
                                                            color="textSecondary"
                                                            component="p"
                                                            className={classes.qtyLabel}
                                                        >
                                                            QTY - {cartItem['quantity']}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            color="textSecondary"
                                                            component="p"
                                                            className={classes.qtyLabel}
                                                        >
                                                            Weight - {cartItem['cake_weight']} KG
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                ))
                            }
                        </Grid>
                        {cartItems && cartItems.length && cartItems[0]['cart_items'].length ? <Grid item xs={12} sm={12} md={5}>
                            <Box className={classes.promo_code_price_details_wrapper}>
                                <PromocodePriceDetails deliveryDate={true} />
                                <Box>
                                    <Box
                                        className={classes.checkoutBtn}
                                        onClick={() => { proceedToCheckOut() }}
                                    >
                                        <CmnButton
                                            btntitle="Proceed to Checkout"
                                            variant="contained"
                                            className="theme-contained-btn"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid> : <EmptyCart />}
                    </Grid>
                </Box>
                <Dialog
                    open={openAlertView}
                    onClose={handleCloseAlertView}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.dialog_title}>
                        {"Date & Time Validation"}
                        <HighlightOffIcon onClick={handleCloseAlertView} />
                    </DialogTitle>
                    <DialogContent className={classes.dialog_content}>
                        <Box className="location-wrapperbox">
                            <Grid container className="home-onhover-location-right-wrapper" >
                                Please selct date & time.
                            </Grid>
                        </Box>
                    </DialogContent>
                </Dialog>
            </Box>
        </CustomeContainer>
    );
}

export default MyCart;
