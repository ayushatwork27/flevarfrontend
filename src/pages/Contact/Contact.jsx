import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import CmnButton from "../../components/CmnButton/CmnButton"
import Circle from "../../components/CircularText/CircularText";
import Location from "./Location";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import ContactMapAddress from "./ContactMapAddress";
import { SEND_QUERY_API } from '../../shared/constants/api-routes.constants';
import flevar from '../../api/api';

const useStyles = makeStyles((theme) => ({
    contactus_hero_section_image_box: {
        backgroundColor: "#E8656B",
        padding: "50px"
    },
    contactus_hero_section_image_box_grid: {
        backgroundColor: "#E8656B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: "40px",
        }
    },
    contactus_hero_section_description_box: {
        maxWidth: "713px",
        marginLeft: "auto",
        marginRight: "50px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "15px",
        }
    },
    contactus_hero_section_wrapper: {
        paddingLeft: "15px"
    },
    contactus_hero_section_main_title: {
        display: "flex",
        fontSize: "81px",
        "& h2": {
            fontSize: "70px",
            letterSpacing: "-0.97px",
            lineHeight: "77px",
        },
        "& p": {
            fontSize: "70px",
            letterSpacing: "-0.97px",
            color: "#E8656B",
            display: "inline-block",
            padding: "0px 8px",
            fontWeight: "600"

        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "81px",
            "& h2": {
                fontSize: "81px",
            },
            "& h3": {
                fontSize: "81px",

                color: "#E8656B"
            }
        }
    },
    fl_right: {
        flot: "none",
        [theme.breakpoints.up("md")]: {
            float: "right",
        }
    },
    w_50: {
        minWidth: "200px",
        maxWidth: "350px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
        }
    },
    contactus_cmn_title: {
        fontSize: "22px",
        margin: "80px 0px 50px 0px",
        fontWeight: "600",
        color: "#222222",
        [theme.breakpoints.down("sm")]: {
            margin: "20px 0px 10px 0px",
        }
    },
    contactus_hero_section_image_box_image_with_circular_text: {
        position: "relative",
    }

}));
const initialData = {
    name: '',
    email: '',
    name: '',
    phone: '',
    message: ''
}

function Conact() {
    const classes = useStyles();
    const [queryForm, setQueyForm] = useState(initialData);
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setQueyForm({ ...queryForm, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
        };
        const query = await flevar.post(`${SEND_QUERY_API}`, queryForm, options);
        const { success } = query['data'];
        if (success) setQueyForm(initialData);
        console.log('success', success);
    }
    return (
        <>
            <Box className={classes.contactus_hero_section_wrapper}>
                <Grid container>
                    <Grid sm={12} md={6} item>
                        <Box className={classes.contactus_hero_section_description_box}>
                            <Typography
                                variant="body1"
                                className="contactus-hero-small-titile"
                            >
                                GET IN TOUCH
                            </Typography>
                            <Box className={classes.contactus_hero_section_main_title}>
                                <Typography
                                    variant="h2"
                                    className=""
                                >
                                    Lorem Ipsum is simply<Typography
                                        variant="body1"
                                        className=""
                                    >
                                        dummy
                                    </Typography>
                                    text
                                </Typography>
                            </Box>
                            <Typography className={classes.contactus_cmn_title}>FILL OUT THE FORM</Typography>
                            <form>
                                <Grid container justifyContent="space-between">
                                    <Grid xs={12} md={6} item>
                                        <TextField
                                            label="Name"
                                            variant="filled"
                                            className=
                                            {`single-formbox cmn-form-box-mb  ${classes.w_50}`}
                                            name="name"
                                            value={queryForm?.name || ''}
                                            onChange={handleInputChange}/>
                                    </Grid>
                                    <Grid xs={12} md={6} item>
                                        <TextField
                                            label="Email"
                                            variant="filled"
                                            className={`single-formbox cmn-form-box-mb  ${classes.w_50} ${classes.fl_right}`}
                                            name="email"
                                            value={queryForm?.email || ''}
                                            onChange={handleInputChange}/>
                                    </Grid>
                                    <Grid xs={12} md={12} item>
                                        <TextField
                                            label="Phone"
                                            variant="filled"
                                            className={`single-formbox cmn-form-box-mb `}
                                            type="number"
                                            name="phone"
                                            value={queryForm?.phone || ''}
                                            onChange={handleInputChange}
                                            maxLength={11}/>
                                    </Grid>
                                    <Grid xs={12} md={12} item>
                                        <TextField
                                            label="Query"
                                            variant="filled"
                                            className={`single-formbox cmn-form-box-mb `}
                                            multiline
                                            type="text"
                                            rows={4}
                                            name="message"
                                            value={queryForm?.message || ''}
                                            onChange={handleInputChange}/>
                                    </Grid>
                                </Grid>
                                <Box className="">
                                    <CmnButton btntitle="Submit" type="submit" className={`cmn-tabs-black-btn `}  onClick={handleSubmit} />
                                </Box>
                            </form>
                        </Box>

                    </Grid>
                    <Grid sm={12} md={6} item className={classes.contactus_hero_section_image_box_grid}>
                        <Box className={classes.contactus_hero_section_image_box}>
                            <Box className={`contact_circle_wrapper ${classes.contactus_hero_section_image_box_image_with_circular_text}`}>

                                <Circle
                                    text="Loremipsumsliderpicture"
                                    arc={360}
                                    radius={100}
                                />
                                <img src="assets/images/cake4.png" alt="" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <CustomeContainer>
                    <Typography className={classes.contactus_cmn_title}>LOCATIONS</Typography>
                    <Box>
                        <Location />
                    </Box>
                </CustomeContainer>
            </Box>
            <Box>
                <ContactMapAddress />
            </Box>
        </>
    )
}

export default Conact;
