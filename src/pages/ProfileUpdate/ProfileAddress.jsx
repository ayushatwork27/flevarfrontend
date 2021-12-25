import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from "../../components/CmnButton/CmnButton"
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

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

function ProfileAddress({ addressList }) {
    const classes = useStyles();
    const history = useHistory();
    const EditAddress = id => {
        history.push(`/add_new_address/${id}`);
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} xl={10}>
                    {addressList && addressList.map((val, i) => {
                        return (
                            <Box className={classes.addressSingeBox}>
                                <Box className={classes.address}>
                                    <Typography variant="h5" style={{ textTransform: 'capitalize' }}>{val.address_name} ({val.receiver_name || 'NA'})</Typography>
                                    <Typography variant="body2" style={{ textTransform: 'capitalize' }}>
                                        {val.line_1_address}
                                    </Typography>
                                </Box>
                                <Box>
                                    <CmnButton
                                        onClick={() => EditAddress(val.id)}
                                        btntitle={"Edit"}
                                        className={classes.selected_text}
                                    />
                                </Box>
                            </Box>
                        )
                    })}
                </Grid>
            </Grid>

        </div>
    )
}

export default ProfileAddress
