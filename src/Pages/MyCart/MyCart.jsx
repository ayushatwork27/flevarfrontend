import { Typography, Box, Grid } from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CustomeContainer from "../../Components/CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import CmnButton from "../../Components/CmnButton/CmnButton";
import PromocodePriceDetails from "./PromocodePriceDetails";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/cartActions"
import EmptyCart from "../../Components/EmptyCart/EmptyCart";

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

    cart_product_tittle: {
        fontSize: "25px",
        fontWeight: "600",
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
    checkoutBtn: {
        textAlign: "right",
        marginTop: "15px",
        marginLeft: "auto",
        display: "inherit",
    },
}));
function MyCart() {
    const productLists = [];
    const classes = useStyles();
    const [value, setValue] = useState(4);
    const { products } = useSelector(state => state.getProducts);
    const { cartItems } = useSelector(state => state.getCart);
    cartItems.forEach(item => {
        const prodIndex = products && products.data && products.data.data.findIndex(prod => prod.id === item.product_id);
        if (prodIndex > -1) productLists.push(products && products.data && products.data.data[prodIndex]);
    });
    const dispatch = useDispatch();
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <CustomeContainer>
            <Box className={classes.mycart_wrapper}>
                <Typography variant="h5" className={classes.cart_main_title}>
                    My Cart
                </Typography>
                <Box>
                    <Grid container>
                        {
                            productLists.map(product => (
                                <Grid item xs={12} sm={12} md={7}>
                                    <Grid container className={classes.mycart_product}>
                                        <Grid item xs={12} sm={4} md={4}>
                                            <img src="/assets/images/description.png" alt="description" />
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={8}>
                                            <Box className={classes.price_title_message_wrapper}>
                                                <Box className={classes.cart_product_title_with_btn}>
                                                    <Typography
                                                        variant="h3"
                                                        className={classes.cart_product_tittle}
                                                    >
                                                        {product.name}
                                                    </Typography>
                                                    <CmnButton
                                                        btntitle="Remove"
                                                        className={classes.removeBtn}
                                                        onClick={() => removeItemFromCart(product.id)}
                                                    />
                                                </Box>
                                                <Box
                                                    component="fieldset"
                                                    borderColor="transparent"
                                                    className={classes.ratinbox}
                                                >
                                                    <Rating name="read-only" value={value} readOnly />
                                                    <Typography variant="body2">32 Ratings</Typography>
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
                                                        Rs.{product.mrp}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="textSecondary"
                                                        component="p"
                                                        className={classes.originalprice}
                                                    >
                                                        Rs.{product.mrp}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="textSecondary"
                                                        component="p"
                                                        className={classes.cartBirthdayMessage}
                                                    >
                                                        Happy Birthday Sunil
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))
                        }
                        {productLists && productLists.length ? <Grid item xs={12} sm={12} md={5}>
                            <Box className={classes.promo_code_price_details_wrapper}>
                                <PromocodePriceDetails />
                                <Box>
                                    <Box
                                        className={classes.checkoutBtn}
                                        component={Link}
                                        to="/delevering"
                                    >
                                        <CmnButton
                                            btntitle="Proceed to Checkout"
                                            variant="contained"
                                            className="theme-contained-btn"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid> : <EmptyCart /> }
                    </Grid>
                </Box>
            </Box>
        </CustomeContainer>
    );
}

export default MyCart;
