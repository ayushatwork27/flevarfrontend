import { Box, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react'
import CmnButton from '../../Components/CmnButton/CmnButton';
import CustomeContainer from '../../Components/CustomeContainer/CustomeContainer';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({

    special_request_btn: {
        maxWidth: "400px",
        width: "100%",
        margin: "auto"
    },
    special_request_title: {
        fontSize: "30px",
        letterSpacing: "5px",
        fontWeight: "600",
        marginBottom: "15px"
    }
}));

function SpecialOrderRequest() {
    const classes = useStyles();
    return (
        <CustomeContainer>
            <Grid container className="abv" justifyContent="center">
                <Grid sm={12} md={8} lg={10} item >
                    <Typography variant="h2" className={`text-center
                     ${classes.special_request_title} `}>SPECIAL ORDER REQUEST</Typography>
                    <TextField
                        label=""
                        variant="filled"
                        className={`single-formbox cmn-form-box-mb `}
                        name="name"
                        multiline
                        rows={12}
                        placeholder="Enter your request details here"
                    />
                    <Box className="text-center">
                        <CmnButton btntitle="Request" className={`cmnBtn theme-contained-btn  d-block
                     ${classes.special_request_btn}`} />
                        <CmnButton btntitle="Cancel" className={`cmnBtn  d-block ${classes.special_request_btn}`} />
                    </Box>
                </Grid>
            </Grid>
        </CustomeContainer>
    )
}

export default SpecialOrderRequest;
