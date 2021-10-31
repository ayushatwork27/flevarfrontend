import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { authenticateLogin } from '../../service/api';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const loginInitialValues = {
    mobile: ''
};

function Login() {
    const classes = useStyles();
    const [login, setLogin] = useState(loginInitialValues);

    const loginViaOTP = async () => {
        let response = await authenticateLogin(login);
        if (!response) console.log('beg one');
        else console.log('beg two');
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Box>
                <Box className="cmn-formbox-wraapper">
                    <Container md p={1}>
                        <Box className="cmn-profile-main-title">
                            <Typography variant="h5">Register To </Typography>
                            <img
                                src="/assets/images/flevarlogo.png"
                                alt="sitelogo"
                                className="cmn-profile-main-title-logo"
                            />
                        </Box>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Mobile Number"
                                    variant="filled"
                                    className="single-formbox"
                                    onChange={(e) => onValueChange(e)}
                                    name='mobile'
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box className="cmn-bottom-profile-guide-direction">
                    <Link to="/loginviaotp">
                        <Button variant="contained" onClick={() => loginViaOTP()}>Login via OTP</Button>
                    </Link>
                    <Box className="">
                        <Typography>Not a member yet ?</Typography>
                        <Link to="/register">Register</Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Login;
