import { Grid } from '@material-ui/core';
import React from 'react'
import CustomeContainer from '../../components/CustomeContainer/CustomeContainer';
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

function PageNotFound() {
    return (
        <CustomeContainer>
            <Grid container className="abv" justifyContent="center">
                <Grid sm={12} md={8} item className="text-center">
                    <img src="/assets/images/page_not_found.png" alt="page_not_found" />
                </Grid>
            </Grid>
        </CustomeContainer>
    )
}

export default PageNotFound;
