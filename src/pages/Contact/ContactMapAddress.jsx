import { Grid } from '@material-ui/core'
import React from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    contactus_address_box_wrapper: {
        backgroundColor: "#E8656B",
        paddingLeft: "100px",
        [theme.breakpoints.up("xl")]: {
            paddingLeft: "160px",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "15px",
        }
    },
    single_contactus_address_box: {
        "& p:nth-of-type(1)": {
            marginBottom: "20px",
            fontSize: "19px !important",
        },
        "& p:nth-of-type(2)": {
            fontSize: "25px",
            color: "#fff",
            marginBottom: "20px",
            [theme.breakpoints.up("xl")]: {
                fontSize: "35px",
                marginBottom: "40px",
            }
        }
    }
}));
function ContactMapAddress() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid xs={12} md={6} className={classes.contactus_address_box_wrapper} item>
                    <Box className={classes.single_contactus_address_box} >
                        <Typography
                            variant="body1"
                            className="contactus-address_small_titile"
                        >
                            WE’RE LOCATED AT
                        </Typography>
                        <Typography variant="body2">27, AJC Bose Road, Kolkata 700002</Typography>
                    </Box>
                    <Box className={classes.single_contactus_address_box} >
                        <Typography
                            variant="body1"
                            className="contactus-address_small_titile"
                        >
                            CALL US AT
                        </Typography>
                        <Typography variant="body2">+91 9876536473</Typography>
                    </Box>
                    <Box className={classes.single_contactus_address_box} >
                        <Typography
                            variant="body1"
                            className="contactus-address_small_titile"
                        >
                            EMAIL US ON
                        </Typography>
                        <Typography variant="body2">vishal@flevar.com</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} item>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.79145804388!2d86.10572987051263!3d22.784171388479994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1637477024782!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactMapAddress
