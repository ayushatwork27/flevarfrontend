import { useState } from 'react'
import CmnButton from "../../components/CmnButton/CmnButton"
import { Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CustomeContainer from '../../components/CustomeContainer/CustomeContainer'
import LogoutButton from "../../components/LogOutButton/LogoutButton";
import Profile from '../../components/Pofile/Profile';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAddress, updateAddress } from "../../shared/store/actions/address.actions";

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

function AddNewAdderess({ flevarUser, address }) {
    const classes = useStyles();
    const [state, setState] = useState({
        customer_id: flevarUser.id,
        address_name: address.address_name,
        pincode: address.pincode,
        line_1_address: address.line_1_address,
        line_2_address: address.line_2_address,
        landmark: address.landmark,
        receiver_contact: address.receiver_contact,
        receiver_name: address.receiver_name
    });
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const history = useHistory();
    let dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (address) dispatch(updateAddress(state, address.id, flevarUser.id));
        else dispatch(addAddress(state));
        history.push('/');
    }

    const { address_name, pincode, line_1_address, line_2_address, landmark, receiver_contact, receiver_name } = state ? state : {};

    return (
        <CustomeContainer>
            <Grid container>
                <Grid sm={12} md={3} item>
                    <Box>
                        <Profile flevarUser={flevarUser} />
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
                                    value={address_name}
                                    className=
                                    {`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Pin Code"
                                    variant="filled"
                                    name="pincode"
                                    onChange={handleInputChange}
                                    value={pincode}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                    type="number" />
                            </Grid>
                        </Grid>
                        <TextField
                            label="Line 1 Address"
                            variant="filled"
                            name="line_1_address"
                            onChange={handleInputChange}
                            value={line_1_address}
                            className="single-formbox cmn-form-box-mb" />
                        <TextField
                            label="Line 2 Address"
                            variant="filled"
                            name="line_2_address"
                            onChange={handleInputChange}
                            value={line_2_address}
                            className="single-formbox cmn-form-box-mb" />
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Landmark"
                                    variant="filled"
                                    name="landmark"
                                    onChange={handleInputChange}
                                    value={landmark}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Receiver’s Contact Number"
                                    variant="filled"
                                    name="receiver_contact"
                                    onChange={handleInputChange}
                                    value={receiver_contact}
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
                                    value={receiver_name}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                        </Grid>
                        <Box className="cmn-tabs-black-btn-wrapper">
                            <CmnButton btntitle={address && address.id ? 'Update' : 'Add'} className={`cmn-tabs-black-btn`} onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </CustomeContainer>
    )
}

export default AddNewAdderess
