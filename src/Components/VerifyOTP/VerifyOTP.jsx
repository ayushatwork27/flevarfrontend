import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { verifyOtpOnServer } from "../../service/api";

function VerifyOTP() {
    const [otp, setOtp] = useState(null);

    const verifyOtpApiCall = async () => {
        let response = await verifyOtpOnServer({ mobile: '', otp: otp });
        console.log(response);
    };

    return (
        <>
            <Box>
                <Box className="cmn-formbox-wraapper">
                    <Container p={1}>
                        <Box className="cmn-profile-main-title">
                            <Typography variant="h5">Register To </Typography>
                            <img
                                src="/assets/images/flevarlogo.png"
                                alt="sitelogo"
                                className="cmn-profile-main-title-logo"
                            />
                        </Box>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item sm={12} md={12}>
                                <Box className="otp-enter-wrapper">
                                    <TextField
                                        variant="filled"
                                        className="single-formbox"
                                        placeholder="Enter OTP"
                                        onChange={(e) => setOtp(e.target.value)}
                                        name="otp"
                                    />
                                    {/* <TextField variant="filled" className="single-formbox" />
                  <TextField variant="filled" className="single-formbox" />
                  <TextField variant="filled" className="single-formbox" /> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box className="cmn-bottom-profile-guide-direction">
                    <Button
                        variant="contained"
                        className="profile-cmn-btn"
                        onClick={() => verifyOtpApiCall()}
                    >
                        Verify & Login
                    </Button>
                    <Box className="profile-diretion">
                        <Typography>Not a member yet ?</Typography>
                        <Link to="/register">Register</Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default VerifyOTP;
