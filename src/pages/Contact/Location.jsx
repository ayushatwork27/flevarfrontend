import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import CmnButton from '../../components/CmnButton/CmnButton'
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


function Location() {
    const classes = useStyles();
    const { locations } = useSelector(state => state.app);
    return (
        <div>
            <Box marginTop={5} padding={1}>
                <Grid container spacing={2}>
                    {
                        locations.map((val, i) =>
                            <Grid item sm={6} md={4} className={classes.location_single_box} key={i}>
                                <img src={val.image_url} alt="cityimage"/>
                                <CmnButton btntitle={val.name} />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </div >
    )
}

export default Location
