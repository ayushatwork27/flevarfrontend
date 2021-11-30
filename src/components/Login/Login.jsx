import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { authenticateLogin } from "../../shared/store/actions/app.actions";

const loginInitialValues = {
    mobile: "",
};

function Login() {
    let dispatch = useDispatch();
    const [login, setLogin] = useState(loginInitialValues);
    const loginViaOTP = () => {
        dispatch(authenticateLogin(login));
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
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
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Mobile Number"
                                    variant="filled"
                                    className="single-formbox"
                                    onChange={(e) => onValueChange(e)}
                                    name="mobile"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box className="cmn-bottom-profile-guide-direction">
                    <Link to="/loginviaotp">
                        <Button
                            variant="contained"
                            onClick={() => loginViaOTP()}
                            className="profile-cmn-btn"
                        >
                            Login via OTP
                        </Button>
                    </Link>
                    <Box className="profile-diretion">
                        <Typography>Not a member yet ?</Typography>
                        <Link to="/register">Register</Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Login;
