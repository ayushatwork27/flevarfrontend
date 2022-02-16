import React from 'react'
import { Box, Grid } from '@material-ui/core'
import CmnButton from '../../components/CmnButton/CmnButton'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    location_single_box: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "350px",
        height: "200px",
        marginBottom: "64px",
        [theme.breakpoints.up("xl")]: {
            width: "490px",
            height: "480px",
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: "10px",
        },
        "& button": {
            position: "absolute",
            zIndex: "55",
            backgroundColor: "#fff",
            color: "#222",
            "&:hover": {
                backgroundColor: "#fff",
            }
        }
    }
}));

const locationData = [
    {
        imgsrc: "assets/images/cityimage4.jpg",
        btnlable: "Calcutta"
    },
    {
        imgsrc: "assets/images/cityimage4.jpg",
        btnlable: "JAMSHEDPUR"
    },
    {
        imgsrc: "assets/images/cityimage4.jpg",
        btnlable: "RANCHI"
    },
]
function Location() {
    const classes = useStyles();
    return (
        <div>
            <Box marginTop={5} padding={1}>
                <Grid container spacing={2}>
                    {
                        locationData.map((val, i) =>
                            <Grid item sm={6} md={4} className={classes.location_single_box} key={i}>
                                <img src={val.imgsrc} alt="cityimage" />
                                <CmnButton btntitle={val.btnlable} />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </div >
    )
}

export default Location
