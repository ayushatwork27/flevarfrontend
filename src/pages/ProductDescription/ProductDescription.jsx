import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CmnButton from "../../components/CmnButton/CmnButton";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { Rating } from "@material-ui/lab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DescriptionTabs from "./DescriptionTabs";
import CakesItems from "../../components/CakeItemCard/CakesItems";
import { useParams } from "react-router-dom";
import { getProductDetailAction } from '../../shared/store/actions/product.actions';
import { addToCartAction, updateCartAction } from '../../shared/store/actions/cart.actions';
import { useHistory } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    Product_description_main_title: {
        fontSize: "40px",
        letterSpacing: "-0.6px",
        color: "#222",
        fontWeight: 600,
        lineHeight: "47px",
    },

    popolarcakepricing: {
        display: "flex",
        alignItems: "center",
        margin: "10px 0px",
    },
    sellingprice: {
        marginRight: "5px",
        color: "#e8656b ",
        fontWeight: 600,
        fontSize: "50px",
    },
    originalprice: {
        textDecoration: "line-through",
        color: "#C6C6C6",
        fontSize: "30px",
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
    counter_box: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F4ECEC",
        padding: "5px 10px",
        borderRadius: "27px",
        width: "fit-content",
        color: "#1D1D1D",
        marginBottom: "40px",
    },
    view3d: {
        marginLeft: "30px",
    },
    description_messages_wrapper: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F4F4F4",
        marginTop: "40px",
    },
    send_btn: {
        border: "none",
        borderLeft: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "0",
        paddingLeft: "30px",
    },
    description_messages_input: {
        borderRadius: "0px",
        "& .MuiFilledInput-root": {
            borderRadius: "0px",
            backgroundColor: "#F4F4F4",
        },
        "& .Mui-focused": {
            color: "#000;",
            fontFamily: "Montserrat",
        },
    },
}));

function ProductDescription(props) {
    let defaultCount = 1;
    const history = useHistory();
    const classes = useStyles();
    const value = 4;
    const handleIncrement = () => setCount((prevCount) => prevCount + 1);

    const handleDecrement = () => {
        if (count < 2) setCount(1);
        else setCount((prevCount) => prevCount - 1);
        
    };
    const [open, setOpen] = useState(false);
    
    const handleClose = () => setOpen(false);

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => dispatch(getProductDetailAction(id)), [id]);
    const { productList, productDetail } = useSelector(state => state.product);
    const { cartItems } = useSelector(state => state.cart);

    let itemIndex = cartItems.findIndex(item => productDetail && item.product_id === productDetail.id);
    if (itemIndex > -1) defaultCount = cartItems[itemIndex]['quantity'];
    const [count, setCount] = useState(defaultCount);

    const buyNow = () => {
        setOpen(true);
        const productObj = {
            product_id: productDetail.id,
            cake_message: 'New Deewali',
            cake_weight: 1,
            quantity: count,
            mrp: productDetail.mrp,
            pincode: 495689
        }
        const isItemInCart = cartItems && cartItems.find(item => item['cart_items'] && item['cart_items'].length && item['cart_items'][0]['product_id'] === productDetail.id);
        if (isItemInCart) dispatch(updateCartAction(productObj));
        else dispatch(addToCartAction(productObj));
        history.push('/mycart');
    }


    return (
        <CustomeContainer>
            <Box className={classes.Product_description_wrapper}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Box className={classes.Product_description_largerimage}>
                            <img src="/assets/images/description.png" alt="description" />
                        </Box>
                        <Box className={classes.Product_description_largerimage}>
                            <img src="/assets/images/description.png" alt="description" />
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box className={classes.Product_description_details_wrapper}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                className={classes.Product_description_main_title}
                            >
                                {productDetail && productDetail.name}
                            </Typography>
                            <Box
                                component="fieldset"
                                borderColor="transparent"
                                className={classes.ratinbox}
                            >
                                <Rating name="read-only" value={value} readOnly />
                                <Typography variant="body2">32 Ratings</Typography>
                            </Box>
                            <Box className={classes.popolarcakepricing} display="flex">
                                <Typography
                                    variant="h5"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.sellingprice}
                                >
                                    Rs.{productDetail && productDetail.mrp}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.originalprice}
                                >
                                    Rs.{productDetail && productDetail.mrp}
                                </Typography>
                            </Box>
                            <Box className={classes.counter_box}>
                                <Button onClick={handleDecrement} disabled={count === 1}>-</Button>
                                <Typography variant="h6">{count}</Typography>
                                <Button onClick={handleIncrement}>+</Button>
                            </Box>
                            <Box>
                                <CmnButton
                                    btntitle="Buy Now"
                                    variant="contained"
                                    className="theme-contained-btn"
                                    onClick={buyNow}
                                />
                                <CmnButton
                                    variant="outlined"
                                    btntitle="View in 3D"
                                    className={classes.view3d}
                                />
                            </Box>
                            <Box>
                                <form noValidate autoComplete="off">
                                    <Box className={classes.description_messages_wrapper}>
                                        <TextField
                                            id="filled-basic"
                                            fullWidth
                                            variant="filled"
                                            label="Type Message on Cake Here"
                                            className={classes.description_messages_input}
                                            disableunderline="true"
                                        />
                                        <CmnButton
                                            variant="outlined"
                                            className={classes.send_btn}
                                            startIcon={<ArrowForwardIcon />}
                                        />
                                    </Box>
                                </form>
                            </Box>
                            <Box>
                                <DescriptionTabs onClose={handleClose} open={open} product={productDetail} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box className="title_with_btn">
                    <Typography variant="h5">MORE CAKES FOR YOU</Typography>
                </Box>
                <Grid container spacing={3}>
                    <CakesItems products={productList} />
                </Grid>
            </Box>
            <Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="sm"
                    fullWidth
                >
                    Rs.1079
                </Dialog>
            </Box>
            <Box className={classes.counter_box}>
                <Button onClick={handleDecrement}>-</Button>
                <Typography variant="h6">{count}</Typography>
                <Button onClick={handleIncrement}>+</Button>
            </Box>
            <Box>
                <CmnButton
                    btntitle="Buy Now"
                    variant="contained"
                    className="theme-contained-btn"
                    onClick={buyNow}
                />
                <CmnButton
                    variant="outlined"
                    btntitle="View in 3D"
                    className={classes.view3d}
                />
            </Box>
            <Box>
                <form noValidate autoComplete="off">
                    <Box className={classes.description_messages_wrapper}>
                        <TextField
                            id="filled-basic"
                            fullWidth
                            variant="filled"
                            label="Type Message on Cake Here"
                            className={classes.description_messages_input}
                            disableunderline="true"
                        />
                        <CmnButton
                            variant="outlined"
                            className={classes.send_btn}
                            startIcon={<ArrowForwardIcon />}
                        />
                    </Box>
                </form>
            </Box>
            <Box>
                <DescriptionTabs onClose={handleClose} open={open} />
            </Box>
        </CustomeContainer >
    );
}

export default ProductDescription;
