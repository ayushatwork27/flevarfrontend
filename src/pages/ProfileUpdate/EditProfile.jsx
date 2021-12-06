import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../components/CmnButton/CmnButton"
import { Grid, TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userUpdate } from "../../shared/store/actions/app.actions";
import { useSelector } from 'react-redux';

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
    addbtn_addNewAddress: {
        backgroundColor: "#222222",
        color: "#fff",
        padding: "15px 80px !important",
        "&:hover": {
            backgroundColor: "#222222",
        },
        flot: "none",
        [theme.breakpoints.up("md")]: {
            float: "right",
        }
    }

}));

function EditProfile() {
    const classes = useStyles();
    let dispatch = useDispatch();
    const history = useHistory();
    const [userDetail, setUserDetail] = useState(null);
    const { user } = useSelector(state => state.app);
    if (user && !userDetail) setUserDetail({ password: "asdf1234", ...user });
    const onValueChange = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
    };

    const userUpdateAction = () => {
        dispatch(userUpdate(userDetail));
        history.push('/');
    };

    return (
        <div>
            <Grid container justifyContent="space-between">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Full Name"
                            variant="filled"
                            className="single-formbox"
                            disableunderline="false"
                            onChange={(e) => onValueChange(e)}
                            value={userDetail && userDetail.name}
                            name="name"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Mobile Number"
                            variant="filled"
                            className="single-formbox"
                            onChange={(e) => onValueChange(e)}
                            value={userDetail && userDetail.mobile}
                            name="mobile"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Email Id"
                            variant="filled"
                            className="single-formbox"
                            onChange={(e) => onValueChange(e)}
                            value={userDetail && userDetail.email}
                            name="email"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Box className="cmn-tabs-black-btn-wrapper">
                <CmnButton btntitle="Update" className={`cmn-tabs-black-btn`} onClick={() => userUpdateAction()} />
            </Box>
        </div>
    )
}

export default EditProfile

