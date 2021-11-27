import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../components/CmnButton/CmnButton"
import { Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
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
    return (
        <div>
            <Grid container justifyContent="space-between">
                <Grid xs={12} md={6} item>
                    <TextField
                        label=""
                        variant="filled"
                        className=
                        {`single-formbox cmn-form-box-mb  ${classes.w_50}`}
                        name="name" />
                </Grid>
                <Grid xs={12} md={6} item >
                    <TextField
                        label=""
                        variant="filled"
                        className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                        name="name"
                    />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField
                        label=""
                        variant="filled"
                        className=
                        {`single-formbox cmn-form-box-mb  ${classes.w_50}`}
                        name="name" />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField
                        label=""
                        variant="filled"
                        className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                        name="name"
                    />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField
                        label=""
                        variant="filled"
                        className=
                        {`single-formbox cmn-form-box-mb  ${classes.w_50}`}
                        name="name" />
                </Grid>
                <Grid xs={12} md={6} item>
                    <TextField
                        label=""
                        variant="filled"
                        className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                        name="name"
                    />
                </Grid>
                <TextField
                    label=""
                    variant="filled"
                    className={`single-formbox cmn-form-box-mb `}
                    name="name"
                    multiline
                    rows={4}
                />
            </Grid>
            <Box className="cmn-tabs-black-btn-wrapper">
                <CmnButton btntitle="Update" className={`cmn-tabs-black-btn`} />
            </Box>
        </div>
    )
}

export default EditProfile

