import { useSelector } from 'react-redux';
import SimpleSlider from "../../components/ProductSlider/SimpleSlider";
import CakesItems from "../../components/CakeItemCard/CakesItems";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import OocassionButton from "./OocassionButton";
import FeaturesPrducts from "./FeaturesPrducts";
import ShopByCategory from "./ShopByCategory";
import homesliderData from "../../components/Data/homesliderData";
import CmnButton from "../../components/CmnButton/CmnButton";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import DataCustomerReviewSlider from "../../components/Data/DataCustomerReviewSlider";
import DataInstaFameSlider from "../../components/Data/DataInstaFameSlider";
import Service from "./Service";
import { Link } from "react-router-dom";
import SpecialRequest from "./SpecialRequest";
import { useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
    mega_review_wrapper: {
        border: "1px solid #afa0a0",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
        borderRadius: "5px",
    },
    reviews_wrapper: {
        display: "flex",
        padding: "5px 5px",
        borderBottom: "1px solid #afa0a0",
        color: "#afa0a0",

        "& p": {
            marginLeft: "10px",
            fontSize: "14px",
            color: "#7e7474",
        },
        "& h6": {
            marginLeft: "10px",
            fontWeight: "600",
            color: "#7e7474",
        }
    },
    image_name_place: {
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexFlow: "column",
        fontSize: "14px",
        minWidth: "150px",
        color: "#7e7474",

        "& p": {
            fontWeight: "600"
        },
    }
}));



function Home() {
    const classes = useStyles();
    const settings = {
        className: "home-slider-wrapper",
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                },
            },
        ],
    };
    const CustomerReviewSliderSetting = {
        dots: false,
        className: "customer-review-slidersetting",
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };
    const InstaFameSetting = {
        className: "instaFame-wrapper",
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    const { productList } = useSelector(state => state.product);

    const { categoryList } = useSelector(state => state.product);

    const cakesRef = useRef(null);

    const scrollIntoView = () => cakesRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <div>
            <CustomeContainer>
                <Box className="slider-wrapper-home">
                    <SimpleSlider sliderData={homesliderData} settings={settings} scrollIntoView={scrollIntoView} />
                </Box>
                <Box className="servicesBox">
                    <Service />
                </Box>

                <Box ref={cakesRef}>
                    <Box className="title_with_btn">
                        <Typography variant="h5">POPULAR CAKES</Typography>
                        <CmnButton
                            variant="contained"
                            className="cmn_btn_with-title"
                            endIcon={<ChevronRightIcon />}
                            btntitle="view All"
                            component={Link}
                            to="/products"
                        >
                            View All
                        </CmnButton>
                    </Box>
                    <Grid container spacing={3}>
                        <CakesItems products={productList} />
                    </Grid>
                </Box>

                <Box>
                    <Box className="title_with_btn">
                        <Typography variant="h5">Our Happy Customers Reviews</Typography>
                    </Box>
                    <Box className={classes.mega_review_wrapper} >
                        <Box className={`testclass ${classes.reviews_wrapper}`}>
                            <Box className={classes.image_name_place}>
                                <Avatar alt="Remy Sharp" src="/assets/images/review_tabs.png" />
                                <Typography variant="body1">
                                    Manoj Singh,Delhi
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6">Test is amizing</Typography>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </Typography>
                            </Box>

                        </Box>
                        <Box className={`testclass ${classes.reviews_wrapper}`}>
                            <Box className={classes.image_name_place}>
                                <Avatar alt="Remy Sharp" src="/assets/images/review_tabs.png" />
                                <Typography variant="body1">
                                    Manoj Singh,Delhi
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6">Quality with test</Typography>
                                <Typography variant="body1">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box className="title_with_btn">
                        <Typography variant="h5">SHOP BY CATEGORY</Typography>

                        <CmnButton
                            variant="contained"
                            className="cmn_btn_with-title"
                            endIcon={<ChevronRightIcon />}
                            btntitle="view All"
                            component={Link}
                            to="/categories"
                        >
                            View All
                        </CmnButton>
                    </Box>
                    <Box>
                        <ShopByCategory categories={categoryList} />
                    </Box>
                </Box>

                <Box>
                    <Box className="title_with_btn">
                        <Typography variant="h5">SHOP BY OCCASION</Typography>
                    </Box>
                    <Box>
                        <OocassionButton />
                    </Box>
                </Box>
            </CustomeContainer>
            <Box>
                <FeaturesPrducts />
            </Box>

            <CustomeContainer>
                <Box className="review-slider-component-wrapper">
                    <SimpleSlider
                        sliderData={DataCustomerReviewSlider}
                        settings={CustomerReviewSliderSetting}
                    />
                </Box>
            </CustomeContainer>

            <CustomeContainer>
                <SpecialRequest />
            </CustomeContainer>

            <CustomeContainer>
                <Box className="title_with_btn">
                    <Typography variant="h5">JOIN OUR INSTA FAM</Typography>
                </Box>

                <SimpleSlider
                    sliderData={DataInstaFameSlider}
                    settings={InstaFameSetting}
                />
            </CustomeContainer>
        </div>
    );
}

export default Home;