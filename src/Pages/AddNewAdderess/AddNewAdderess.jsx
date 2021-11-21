import React from 'react'
import { Link } from "react-router-dom";
import CmnButton from "../../Components/CmnButton/CmnButton"
import { Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CustomeContainer from '../../Components/CustomeContainer/CustomeContainer'
import LogoutButton from "../../Components/LogOutButton/LogoutButton";
import Profile from '../../Components/Pofile/Profile';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    add_new_address_container: {
        maxWidth: "863px"
    },
    fl_right: {
        flot: "none",
        [theme.breakpoints.up("md")]: {
            float: "right",
        }
    },
    w_50: {
        minWidth: "340px",
        maxWidth: "422px",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            maxWidth: "400px",
            width: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: "280px",
            width: "100%",
        }
    },
    add_new_address_title: {
        color: "#222222",
        fontWeight: "600",
        fontSize: "26px",
        margin: "30px 0px 30px 0px"
    },


}));
function AddNewAdderess() {
    const classes = useStyles();
    return (
        <CustomeContainer>
            <Grid container>
                <Grid sm={12} md={3} item>
                    <Box>
                        <Profile />
                        <Box className="cmn-profile_bottom_btn">
                            <LogoutButton />
                        </Box>
                    </Box>
                </Grid>

                <Grid sm={12} md={9} item>
                    <Box className={`cmn-left-profile-with-right-content  ${classes.add_new_address_container}`}>
                        <Typography className={` ${classes.add_new_address_title}`}> ADD NEW ADDRESS</Typography>
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="Address Name"
                                    variant="filled"
                                    className=
                                    {`single-formbox cmn-form-box-mb  ${classes.w_50}`}
                                    name="name" />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    label="Pin Code"
                                    variant="filled"
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                    name="name"
                                    type="number" />
                            </Grid>
                        </Grid>
                        <TextField
                            label="Line 1 Address"
                            variant="filled"
                            className="single-formbox cmn-form-box-mb" />
                        <TextField
                            label="Line 2 Address"
                            variant="filled"
                            className="single-formbox cmn-form-box-mb" />
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Landmark"
                                    variant="filled"
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Receiver’s Phone Number"
                                    variant="filled"
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                    type="number"
                                />
                            </Grid>
                        </Grid>
                        <Box className="cmn-tabs-black-btn-wrapper">
                            <CmnButton btntitle="Add" className={`cmn-tabs-black-btn `} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </CustomeContainer>
    )
}

export default AddNewAdderess
