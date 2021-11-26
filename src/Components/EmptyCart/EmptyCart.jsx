import React from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles";
import CustomeContainer from '../CustomeContainer/CustomeContainer';
import { Typography } from '@material-ui/core';
import CmnButton from '../CmnButton/CmnButton';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    empty_cart_page: {
        textAlign: "center",
        "& h2": {
            color: "#222",
            fontSize: "33px",
            letterSpacing: "-0.4px",
            margin: "50px 0px 15px 0px",
            fontWeight: "600"
        },
        "& p": {
            color: "rgba(34, 34, 34, 0.65)",
            fontSize: "18px",
            letterSpacing: "-0.25px",
            margin: "0px 0px 30px 0px",
            fontWeight: "500"
        }
    }
}));
function EmptyCart() {
    const classes = useStyles();
    const history = useHistory();
    const addItem = () => {
        history.push('/');
    }
    return (
        <CustomeContainer>
            <Box className={classes.empty_cart_page}>
                <img src="assets/images/error_image.png" alt="error_image" />
                <Typography variant="h2">Your cart is Empty</Typography>
                <Typography variant="body1">Add Delicious Cakes to your cart now</Typography>
                <CmnButton btntitle="Shop Now" className="cmnBtn theme-contained-btn" onClick={addItem} />
            </Box>

        </CustomeContainer>
    )
}

export default EmptyCart
