import React, { useState, useEffect } from 'react'
import CmnButton from "../../components/CmnButton/CmnButton"
import { Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CustomeContainer from '../../components/CustomeContainer/CustomeContainer'
import LogoutButton from "../../components/LogOutButton/LogoutButton";
import Profile from '../../components/Pofile/Profile';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addAddressAction, getAddressAction, updateAddressAction } from "../../shared/store/actions/app.actions";
import { useParams } from "react-router-dom";

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
    const [addressDetail, setAddressDetail] = useState(null);
    const { user } = useSelector(state => state.app);
    const { address } = useSelector(state => state.app);
    const { id } = useParams();
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setAddressDetail({ ...addressDetail, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) dispatch(updateAddressAction(addressDetail, id, user.id));
        else dispatch(addAddressAction(addressDetail));
    }

    useEffect(() => {
        if (id) dispatch(getAddressAction(id));
    }, [id]);

    if (user && !addressDetail) setAddressDetail(!address ? {
        customer_id: user.id,
        address_name: "",
        pincode: "",
        line_1_address: "",
        line_2_address: "",
        landmark: "",
        receiver_contact: "",
        receiver_name: ""
    } : { customer_id: user.id, ...address });

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
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Address Name"
                                    variant="filled"
                                    onChange={handleInputChange}
                                    name="address_name"
                                    value={addressDetail && addressDetail.address_name}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Pin Code"
                                    variant="filled"
                                    name="pincode"
                                    onChange={handleInputChange}
                                    value={addressDetail && addressDetail.pincode}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                    type="number" />
                            </Grid>
                        </Grid>
                        <TextField
                            label="Line 1 Address"
                            variant="filled"
                            name="line_1_address"
                            onChange={handleInputChange}
                            value={addressDetail && addressDetail.line_1_address}
                            className="single-formbox cmn-form-box-mb" />
                        <TextField
                            label="Line 2 Address"
                            variant="filled"
                            name="line_2_address"
                            onChange={handleInputChange}
                            value={addressDetail && addressDetail.line_2_address}
                            className="single-formbox cmn-form-box-mb" />
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Landmark"
                                    variant="filled"
                                    name="landmark"
                                    onChange={handleInputChange}
                                    value={addressDetail && addressDetail.landmark}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Receiver’s Contact Number"
                                    variant="filled"
                                    name="receiver_contact"
                                    onChange={handleInputChange}
                                    value={addressDetail && addressDetail.receiver_contact}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                    type="number"
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Receiver’s Name"
                                    variant="filled"
                                    name="receiver_name"
                                    onChange={handleInputChange}
                                    value={addressDetail && addressDetail.receiver_name}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                        </Grid>
                        <Box className="cmn-tabs-black-btn-wrapper">
                            <CmnButton btntitle={address ? 'Update' : 'Add'} className={`cmn-tabs-black-btn`} onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </CustomeContainer>
    )
}

export default AddNewAdderess