import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";

import Select from "@material-ui/core/Select";
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

function Register() {
  const classes = useStyles();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <TextField
                  label="Full Name"
                  variant="filled"
                  className="single-formbox"
                  disableUnderline={false}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  label="Mobile Number"
                  variant="filled"
                  className="single-formbox"
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  label="Email Id"
                  variant="filled"
                  className="single-formbox"
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <FormControl
                  className={classes.formControl}
                  className="single-formbox"
                  variant="filled"
                >
                  <InputLabel id="demo-simple-select-label">
                    Select Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className="cmn-bottom-profile-guide-direction">
          <Button variant="contained">Register</Button>
          <Box className="">
            <Typography>Already a member ?</Typography>
            <Link to="login">Login</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Register;
