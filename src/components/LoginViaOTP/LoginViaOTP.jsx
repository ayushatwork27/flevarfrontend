import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import { verifyOtpOnServer } from "../../shared/store/actions/app.actions";

const otpInitialValues = {
    one: "",
    two: "",
    three: "",
    four: "",
};

function LoginViaOTP() {
    let dispatch = useDispatch();
    const [otp, setOtp] = useState(otpInitialValues);
    const onValueChange = (e) => {
        setOtp({ ...otp, [e.target.name]: e.target.value });
    }
    const history = useHistory();
    const submitOTP = async () => {
        const verifyOtp = {
            mobile: localStorage.getItem('mobile'),
            otp: Object.values(otp).join(''),
        };
        dispatch(verifyOtpOnServer(verifyOtp));
        history.push('/');
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
                            <Grid item sm={12} md={3}>
                                <Box className="otp-enter-wrapper">
                                    <TextField variant="filled" className="single-formbox" name="one" onChange={(e) => onValueChange(e)} />
                                    <TextField variant="filled" className="single-formbox" name="two" onChange={(e) => onValueChange(e)} />
                                    <TextField variant="filled" className="single-formbox" name="three" onChange={(e) => onValueChange(e)} />
                                    <TextField variant="filled" className="single-formbox" name="four" onChange={(e) => onValueChange(e)} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box className="cmn-bottom-profile-guide-direction">
                    <Button variant="contained" className="profile-cmn-btn" onClick={() => submitOTP()}>
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

export default LoginViaOTP;
