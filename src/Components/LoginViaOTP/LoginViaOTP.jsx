import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
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

function LoginViaOTP() {
  const classes = useStyles();
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
              <Grid item sm={12} md={3}>
                <Box className="otp-enter-wrapper">
                  <TextField variant="filled" className="single-formbox" />
                  <TextField variant="filled" className="single-formbox" />
                  <TextField variant="filled" className="single-formbox" />
                  <TextField variant="filled" className="single-formbox" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className="cmn-bottom-profile-guide-direction">
          <Button variant="contained">Verify & Login</Button>
          <Box className="">
            <Typography>Not a member yet ?</Typography>
            <Link to="/register">Register</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginViaOTP;
