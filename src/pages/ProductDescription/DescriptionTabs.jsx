import { useState } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import CmnButton from "../../components/CmnButton/CmnButton";
import { addProductReviewAction } from '../../shared/store/actions/product.actions';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    appbar: {
        backgroundColor: "#fff",
        color: "#222",
        marginTop: "50px",
        fontWeight: 600,
        "& .MuiTab-wrapper": {
            fontWeight: 600,
        },
        borderBottom: "1px solid #E5E5E5",
    },
    image_with_description: {
        display: "flex",
        flexFlow: "column",
        textAlign: "center",
        marginRight: "10px",
        "& p": {
            marginTop: "10px",
            color: "#7C7C7C",
            fontWeight: 600,
            fontFamily: '"Montserrat", sans-serif',
        },
    },
    image_with_bottom_details: {
        marginTop: "30px",
        color: "#222222",
        fontSize: "20px",
    },
    reviews_wrapper: {
        display: "flex",
        "& p": {
            marginLeft: "10px",
            color: "#222222",
            fontSize: "20px",
        },
    },
    description_messages_input: {
        borderRadius: "0px",
        marginTop: "50px",
        "& .MuiFilledInput-root": {
            borderRadius: "0px",
            backgroundColor: "#F4F4F4",
            height: "200px",
        },
        "& .Mui-focused": {
            color: "#000;",
            fontFamily: "Montserrat",
        },
    },
    post_review_btn: {
        backgroundColor: "#222",
        color: "#fff",
        marginLeft: "auto",
        display: "inherit",
        marginTop: "20px",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.6)",
        },
    },
}));

const reviewInitialValues = {
    review_message: ""
};

function DescriptionTabs({ product, reviews }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const [review, setReview] = useState(reviewInitialValues);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onValueChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };
    const submitReview = () => {
        const reviewObj = { product_id: product.id, review_message: review.review_message };
        dispatch(addProductReviewAction(reviewObj));
        setReview(reviewInitialValues);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} className={classes.appbar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label="DESCRIPTION" {...a11yProps(0)} />
                    <Tab label="REVIEWS" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Box>
                    {/* <Grid container>
                        <Grid sm={4} md={4} item>
                            <Box className={classes.image_with_description}>
                                <img
                                    src="/assets/images/description_tabs.png"
                                    alt="description_tabs"
                                />
                                <Typography variant="body2">Freshly sourced</Typography>
                            </Box>
                        </Grid>
                        <Grid sm={4} md={4} item>
                            <Box className={classes.image_with_description}>
                                <img
                                    src="/assets/images/description_tabs.png"
                                    alt="description_tabs"
                                />
                                <Typography variant="body2">Freshly sourced</Typography>
                            </Box>
                        </Grid>
                        <Grid sm={4} md={4}>
                            <Box className={classes.image_with_description}>
                                <img
                                    src="/assets/images/description_tabs.png"
                                    alt="description_tabs"
                                />
                                <Typography variant="body2">Freshly sourced</Typography>
                            </Box>
                        </Grid>
                    </Grid> */}
                    <Box>

                        <Typography
                            component={'span'} variant={'body2'}
                            className={classes.image_with_bottom_details}
                        >
                            {product && product.description}
                        </Typography>
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {reviews && reviews.length ? reviews.map(review => {
                    return (
                        <Box className={classes.reviews_wrapper}>
                            <Avatar alt="Remy Sharp" src="/assets/images/review_tabs.png" />
                            <Typography variant={'body2'} component={'span'}>
                                {review && review.review_message || 'NA'}
                            </Typography>
                        </Box>
                    )
                }) : 'No review ' + product.name}
                <Box>
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Type your review here"
                        className={classes.description_messages_input}
                        disableunderline="true"
                        name="review_message"
                        value={review.review_message}
                        onChange={(e) => onValueChange(e)}
                    />
                    <CmnButton
                        variant="contained"
                        btntitle="Post Review"
                        className={classes.post_review_btn}
                        onClick={() => submitReview()}
                    />
                </Box>
            </TabPanel>
        </div>
    );
}
export default DescriptionTabs;
