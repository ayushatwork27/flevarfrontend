import React from 'react'
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import CmnButton from '../../components/CmnButton/CmnButton';
import CustomeContainer from '../../components/CustomeContainer/CustomeContainer';

const useStyles = makeStyles(() => ({
    special_request_btn: {
        maxWidth: "400px",
        width: "100%",
        margin: "auto"
    },
    special_request_title: {
        fontSize: "30px",
        letterSpacing: "5px",
        fontWeight: "600",
        marginBottom: "15px"
    },
    wrapper: {
        top: "25%",
        left: "0%",
        position: "absolute"
    }
}));

function PageNotFound() {
    const classes = useStyles();
    const history = useHistory();
    const goToHome = () => {
        history.push('/');
    }
    return (
        <CustomeContainer className={classes.wrapper}>
            <Grid container className={classes.wrapper} justifyContent="center">
                <Grid sm={12} md={8} item className="text-center">
                    <img src="/assets/images/page_not_found.png" alt="page_not_found" />
                    <Box className="text-center">
                        <CmnButton btntitle="Go to home" className={`cmnBtn theme-contained-btn  d-block ${classes.special_request_btn}`} onClick={goToHome} />
                    </Box>
                </Grid>
            </Grid>
        </CustomeContainer>
    )
}

export default PageNotFound;
