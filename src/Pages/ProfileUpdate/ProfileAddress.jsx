import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../Components/CmnButton/CmnButton"
import { Grid, TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
    addressSingeBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid  #D8D8D8",
        padding: "10px 25px",
        marginBottom: "15px",
        [theme.breakpoints.down("md")]: {
            padding: "10px 10px",
        },
    },
    notselected_text: {
        color: "#D8D8D8",
    },
    selected_text: {
        color: "#90EE90",
    },
    address: {
        "& h5": {
            color: "#222",
            fontWeight: "600",
        },

        "& p": {
            color: "#525050",
            marginTop: "5px",
        },
    },
    addnewBtn: {
        color: "#525050",
    },
    checkoutBtn: {
        textAlign: "right",
        marginTop: "15px",
        marginLeft: "auto",
        display: "inherit",
    },

}));

function ProfileAddress() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>

                <Grid item xs={12} xl={10}>
                    <Box className={classes.addressSingeBox}>
                        <Box className={classes.address}>
                            <Typography variant="h5">My Home</Typography>
                            <Typography variant="body2">
                                49,VIP Enclave,Baguiati,Kolkata 700959
                            </Typography>
                        </Box>
                        <Box>
                            <CmnButton
                                btntitle="Default"
                                className={` ${classes.selected_text}`}
                            />
                        </Box>
                    </Box>
                    <Box className={classes.addressSingeBox}>
                        <Box className={classes.address}>
                            <Typography variant="h5">Friend Home</Typography>
                            <Typography variant="body2">
                                49,VIP Enclave,Baguiati,Kolkata 700959
                            </Typography>
                        </Box>
                        <Box>
                            <CmnButton
                                btntitle="Select"
                                className={` ${classes.notselected_text}`}
                            />
                        </Box>
                    </Box>
                    <Box className={classes.addressSingeBox}>
                        <Box className={classes.address}>
                            <Typography variant="h5">Add a new Address</Typography>
                        </Box>
                        <Box>
                            <CmnButton
                                btntitle="add new"
                                className={` ${classes.addnewBtn}`}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProfileAddress
