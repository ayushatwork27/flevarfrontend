import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import CmnButton from "../CmnButton/CmnButton";
import { userRegister } from "../../shared/store/actions/app.actions";

const registerInitialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "asdf1234"
};

function Register() {
    let dispatch = useDispatch();
    const [register, setRegister] = useState(registerInitialValues);
    const onValueChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };
    const history = useHistory();
    const userRegisterAction = () => {
        dispatch(userRegister(register));
        history.push('/login');
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
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} md={7}>
                                <TextField
                                    label="Full Name"
                                    variant="filled"
                                    className="single-formbox"
                                    disableunderline="false"
                                    onChange={(e) => onValueChange(e)}
                                    name="name"
                                />
                            </Grid>

                            <Grid item xs={12} md={7}>
                                <TextField
                                    label="Mobile Number"
                                    variant="filled"
                                    className="single-formbox"
                                    onChange={(e) => onValueChange(e)}
                                    name="mobile"
                                />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <TextField
                                    label="Email Id"
                                    variant="filled"
                                    className="single-formbox"
                                    onChange={(e) => onValueChange(e)}
                                    name="email"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box className="cmn-bottom-profile-guide-direction">
                    <CmnButton
                        btntitle="Register"
                        variant="contained"
                        className="profile-cmn-btn"
                        onClick={() => userRegisterAction()}
                    />
                    <Box className="profile-diretion">
                        <Typography>Already a member ?</Typography>
                        <Link to="login">Login</Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Register;
