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
import { getProductDetailAction, getProductReviewsAction } from '../../shared/store/actions/product.actions';
import { addPincodeAction } from "../../shared/store/actions/app.actions";
import { addCakeMessageAction, addToCartAction, updateCartAction } from '../../shared/store/actions/cart.actions';
import { useHistory } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DialogContent from "@material-ui/core/DialogContent";
import Loader from "../../components/Loader/Loader";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    Product_description_main_title: {
        fontSize: "40px",
        letterSpacing: "-0.6px",
        color: "#222",
        fontWeight: 600,
        lineHeight: "47px",
        textTransform: 'capitalize'
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
    weight_btn_wrapper: {
        marginBottom: "10px",
        "& button": {
            marginRight: "10px"
        }
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: "#f4ecec",
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
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
    },
    dialogPaper: {
        height: "700px",
        width: "700px"
    },
    model_viewer: {
        height: "100%",
        width: "auto"

    },
    buyNow: {
        padding: "10px 20px"
    }
}));

function ProductDescription() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [loader, setLoader] = useState(false);
    const [openTDView, setTDView] = useState(false);
    const [openLocationView, setLocationView] = useState(false);
    const [selectedLocation, setselectedLocation] = useState(null);
    const [openPincodeView, setPincodeView] = useState(false);
    const [pincodeVal, updatePincode] = useState(null);
    const [weight, setWeight] = useState(1);
    const [mrp, setMrp] = useState(0);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [count, setCount] = useState(1);
    const [cakeMsg, updateCakeMsg] = useState('');

    const { id } = useParams();

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const chooseWeight = (e) => {
        setWeight(e.id);
        setMrp(e.mrp);
        setPrice(e.list_price);
    };

    useEffect(() => dispatch(
        getProductDetailAction(id),
        getProductReviewsAction(id)
    ), [id]);

    const { productList, productDetail, productReviewList } = useSelector(state => state.product);
    const { locations, pincode } = useSelector(state => state.app);
    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
        setTimeout(() => setLoader(() => true), 0);
        const cartItem = cartItems[0] && cartItems[0]['cart_items'].filter(prop => prop.product_id === +id);
        setRating(() => (productDetail && productDetail.product_rating || 5));
        setCount(() => cartItem && cartItem.length && cartItem[0]['quantity'] || 1);
        updateCakeMsg(() => cartItem && cartItem.length && cartItem[0]['cake_message'] || '');
        setWeight(() => cartItem && cartItem.length && +cartItem[0]['cake_weight'] || productDetail.product_variants && productDetail.product_variants[0]['id']);
        setMrp(() => productDetail.product_variants && productDetail.product_variants[0]['mrp']);
        setPrice(() => productDetail.product_variants && productDetail.product_variants[0]['list_price']);
        if (loader) setTimeout(() => setLoader(() => false), 2000);
    }, [productDetail, id]);

    const buyNow = () => {
        let authToken = localStorage.getItem('token');
        if (!authToken) {
            history.push('/login');
            return;
        }
        const productObj = {
            product_id: productDetail.id,
            cake_message: cakeMsg,
            cake_weight: weight,
            quantity: count,
            mrp,
            pincode: pincode
        }
        if (pincode) {
            if (localStorage.getItem('cart_token')) dispatch(updateCartAction(productObj));
            else dispatch(addToCartAction(productObj));
            history.push('/mycart');
        } else setLocationView(true);
    }

    const viewTd = () => setTDView(true);

    const handleCloseTDView = () => setTDView(false);

    const handleCloseLocationView = () => setLocationView(false);

    const locationSelection = (location) => {
        handleCloseLocationView();
        setselectedLocation(location);
        setPincodeView(true);
    }

    const checkPincode = (data) => {
        const pincodeIndex = selectedLocation.location_pincodes.findIndex(prop => prop.pincode === +data);
        if (pincodeIndex > -1) {
            dispatch(addPincodeAction({ location_id: selectedLocation.id, pincode: data }));
            setPincodeView(false);
        }
    }

    const handleClosePincodeView = () => setPincodeView(false);

    return (
        <CustomeContainer>
            {loader ? <Loader /> : null}
            <Box className={classes.Product_description_wrapper}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        {productDetail && productDetail.product_gallery_images && productDetail.product_gallery_images.map(img => {
                            return (
                                <Box className={classes.Product_description_largerimage}>
                                    <img src={img.url} />
                                </Box>
                            )
                        })}
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
                                <Rating name="read-only" value={rating} readOnly />
                                <Typography variant="body2">{productDetail && productDetail.total_rated_by} Ratings</Typography>
                            </Box>
                            <Box className={classes.popolarcakepricing} display="flex">
                                <Typography
                                    variant="h5"
                                    color="textSecondary"
                                    component="span"
                                    className={classes.sellingprice}
                                >
                                    Rs.{mrp}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    component="span"
                                    className={classes.originalprice}
                                >
                                    Rs.{price}
                                </Typography>
                            </Box>
                            <Box className={classes.counter_box}>
                                <Button onClick={handleDecrement} disabled={+count === 1}>-</Button>
                                <Typography variant="h6">{count}</Typography>
                                <Button onClick={handleIncrement}>+</Button>
                            </Box>
                            <Box className={classes.weight_btn_wrapper}>
                                {
                                    productDetail.product_variants && productDetail.product_variants.map(val => {
                                        return (
                                            <Button
                                                variant={weight === val.id ? "contained" : "outlined"}
                                                key={val.id}
                                                className={weight === val.id ? "theme-contained-btn" : " "}
                                                id={val.id}
                                                onClick={() => chooseWeight(val)}

                                            >
                                                {val.unit_value} {val.unit_code}
                                            </Button>
                                        );
                                    })
                                }
                            </Box>
                            <Box>
                                <div className="btn-loader-wrapper">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={`theme-contained-btn ${classes.buyNow}`}
                                        disabled={loading}
                                        onClick={buyNow}
                                    >
                                        Buy Now
                                        {loading && <div className="btn-loader-bg"><CircularProgress size={24} className="btn-progress" /> </div>}
                                    </Button>
                                    <CmnButton
                                        variant="outlined"
                                        btntitle="View in 3D"
                                        className={classes.view3d}
                                        onClick={viewTd}
                                    />
                                </div>
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
                                            value={cakeMsg}
                                            onChange={e => updateCakeMsg(e.target.value)}
                                        />
                                        <CmnButton
                                            variant="outlined"
                                            className={classes.send_btn}
                                            startIcon={<ArrowForwardIcon />}
                                            onClick={() => dispatch(addCakeMessageAction(cakeMsg))}
                                        />
                                    </Box>
                                </form>
                            </Box>
                            <Box>
                                <DescriptionTabs product={productDetail} reviews={productReviewList} />
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
            <Dialog
                classes={{ paper: classes.dialogPaper }}
                open={openTDView}
                onClose={handleCloseTDView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.dialog_title}>
                    {"View In 3D "}
                    <HighlightOffIcon onClick={handleCloseTDView} />
                </DialogTitle>
                <DialogContent className={classes.dialog_content}>
                    <model-viewer
                        style={{ height: "100%", width: "auto" }}
                        bounds="tight"
                        ar ar-modes="webxr scene-viewer quick-look"
                        camera-controls environment-image="neutral"
                        shadow-intensity="1"
                        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                        alt="A 3D model of an astronaut"
                    >
                    </model-viewer>
                </DialogContent>
            </Dialog>
            <Dialog
                open={openLocationView}
                onClose={handleCloseLocationView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.dialog_title}>
                    {"Please Select Location"}
                    <HighlightOffIcon onClick={handleCloseLocationView} />
                </DialogTitle>
                <DialogContent className={classes.dialog_content}>
                    <Box className="location-wrapperbox">
                        <Grid container className="home-onhover-location-right-wrapper" >
                            {
                                locations && locations.map((val, i) => {
                                    return (
                                        <Grid item sm={6} md={4} className={` home-onhover-location-singlebox ${classes.location_single_box}`} key={i}
                                            onClick={() => { locationSelection(val) }}>
                                            <img src={val.image_url} alt="cityimage" />
                                            <CmnButton btntitle={val.name} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog
                open={openPincodeView}
                onClose={handleClosePincodeView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.dialog_title}>
                    {"Pincode"}
                    <HighlightOffIcon onClick={handleClosePincodeView} />
                </DialogTitle>
                <DialogContent className={classes.dialog_content}>
                    <form noValidate autoComplete="off">
                        <Box className={classes.description_messages_wrapper}>
                            <TextField
                                id="filled-basic"
                                fullWidth
                                variant="filled"
                                label="Type to check pincode"
                                type="number"
                                maxLength={6}
                                className={classes.description_messages_input}
                                disableunderline="true"
                                value={pincodeVal}
                                onChange={e => updatePincode(e.target.value)}
                            />
                            <CmnButton
                                variant="outlined"
                                className={classes.send_btn}
                                startIcon={<ArrowForwardIcon />}
                                onClick={() => checkPincode(pincodeVal)}
                            />
                        </Box>
                    </form>
                </DialogContent>
            </Dialog>
        </CustomeContainer >
    );
}

export default ProductDescription;
