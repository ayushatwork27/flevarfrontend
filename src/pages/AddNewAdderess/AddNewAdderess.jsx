import React, { useState, useEffect } from 'react'
import CmnButton from "../../components/CmnButton/CmnButton"
import { Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CustomeContainer from '../../components/CustomeContainer/CustomeContainer'
import LogoutButton from "../../components/LogOutButton/LogoutButton";
import Profile from '../../components/Pofile/Profile';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAddressListAction, getAddressAction } from "../../shared/store/actions/app.actions";
import { useParams } from "react-router-dom";
import flevar from '../../api/api';
import { useHistory } from "react-router-dom";
import { ADDRESS_API } from '../../shared/constants/api-routes.constants';

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
    const history = useHistory();
    const [addressDetail, setAddressDetail] = useState(null);
    const { user } = useSelector(state => state.app);
    const { address } = useSelector(state => state.app);
    const { id } = useParams();
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setAddressDetail({ ...addressDetail, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
        };
        if (id) {
            const update_address = await flevar.post(`${ADDRESS_API}/${id}`, addressDetail, options);
            const { success } = update_address['data'];
            if (success) {
                dispatch(getAddressListAction(user.id));
                history.push('/profile_update');
            }
        } else {
            const add_address = await flevar.post(ADDRESS_API, addressDetail, options);
            const { success, data } = add_address['data'];
            if (success) {
                dispatch(getAddressListAction(data['data']['customer_id']));
                history.push('/profile_update');
            }
        }
    }

    useEffect(() => {
        if (id) dispatch(getAddressAction(id));
    }, [id]);

    if (address && id && user && !addressDetail) {
        setAddressDetail({ customer_id: user.id, ...address });
    }

    if (!address && !id && user && !addressDetail) {
        setAddressDetail({
            customer_id: user.id,
            address_name: "",
            pincode: "",
            line_1_address: "",
            line_2_address: "",
            landmark: "",
            receiver_contact: "",
            receiver_name: ""
        });
    }

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
                        <Typography className={` ${classes.add_new_address_title}`}> {id ? 'EDIT' : 'ADD NEW'} ADDRESS</Typography>
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Address Name"
                                    variant="filled"
                                    onChange={handleInputChange}
                                    name="address_name"
                                    value={addressDetail?.address_name || ''}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Pin Code"
                                    variant="filled"
                                    name="pincode"
                                    onChange={handleInputChange}
                                    value={addressDetail?.pincode || ''}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                    type="number" />
                            </Grid>
                        </Grid>
                        <TextField
                            label="Line 1 Address"
                            variant="filled"
                            name="line_1_address"
                            onChange={handleInputChange}
                            value={addressDetail?.line_1_address || ''}
                            className="single-formbox cmn-form-box-mb" />
                        <TextField
                            label="Line 2 Address"
                            variant="filled"
                            name="line_2_address"
                            onChange={handleInputChange}
                            value={addressDetail?.line_2_address || ''}
                            className="single-formbox cmn-form-box-mb" />
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Landmark"
                                    variant="filled"
                                    name="landmark"
                                    onChange={handleInputChange}
                                    value={addressDetail?.landmark || ''}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Receiver’s Contact Name"
                                    variant="filled"
                                    name="receiver_name"
                                    onChange={handleInputChange}
                                    value={addressDetail?.receiver_name || ''}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between">
                            <Grid xs={12} md={6} item>
                                <TextField
                                    label="Receiver’s Contact Number"
                                    variant="filled"
                                    name="receiver_contact"
                                    type="number"
                                    onChange={handleInputChange}
                                    value={addressDetail?.receiver_contact || ''}
                                    className={`single-formbox cmn-form-box-mb  ${classes.w_50}`} />
                            </Grid>
                        </Grid>
                        <Box className="cmn-tabs-black-btn-wrapper">
                            <CmnButton btntitle={id ? 'Update' : 'Add'} className={`cmn-tabs-black-btn`} onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </CustomeContainer>
    )
}

export default AddNewAdderess