import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from "react-router-dom"
import Circle from '../../components/CircularText/CircularText'
import CmnButton from '../../components/CmnButton/CmnButton'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    home_special_request_left_part: {
        [theme.breakpoints.up("md")]: {
            textAlign: "right",
            paddingRight: "15px"
        }
    },
    home_special_request_description: {
        maxWidth: "442px",
        marginLeft: "10%",
        color: "#222",
        "& p:nth-of-type(1)": {
            fontSize: "19px",

            marginBottom: "20px",
            marginTop: "15%",
        },
        "& h2": {
            fontSize: "57px",

            marginBottom: "24px",
            fontWeight: "600"
        }, "& p:nth-of-type(2)": {
            fontSize: "13px",

            marginBottom: "55px",
        },
    },
    home_special_request_description_wrapper: {
        margin: "8% 0px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "70px"
        }

    }
}));

function SpecialRequest() {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.home_special_request_description_wrapper}>
                <Grid sm={12} md={6} item>
                    <Box className={`home_special_request_circle_wrapper ${classes.home_special_request_left_part}`}>
                        <Circle
                            text="Loremipsumsliderpicture"
                            arc={360}
                            radius={100} />
                        <img src="assets/images/banner1.png" className="home_special_request_image" alt="banner1" />
                        <img src="assets/images/icons/banner-circle-arrow-default.svg" className="home_special_request_circle_arrow" alt="banner-circle-arrow-default" />
                    </Box>
                </Grid>
                <Grid sm={12} md={6} item>
                    <Box className={classes.home_special_request_description}>
                        <Typography variant="body1">SPECIAL CAKES BY FLEVAR</Typography>
                        <Typography variant="h2">Have a special cake request?</Typography>
                        <Typography variant="body2">LET US KNOW AND WE WILL MAKE IT HAPPEN</Typography>
                        <CmnButton btntitle="Make a request" component={Link} to="/specail_order_request" className="cmnBtn theme-contained-btn" />
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default SpecialRequest
