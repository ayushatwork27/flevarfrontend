import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { ClassSharp } from '@material-ui/icons';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    w_100: {
        width: "100%",
    },
    /* Cmn style */
    select_slote_radio_with_price: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cmn_date_time_box: {
        boxShadow: "0 2px 30px 0 rgba(0 ,0 ,0 ,0.17)",
        backgroundColor: "#fff",
        borderRadius: "10px",
        maxWidth: "360px",
    },
    date_box_title_close: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #d3d3d3",
        padding: "15px"
    },
    cmn_date_inner_form_box: {
        padding: "15px",
        "& .MuiFormControl-root": {
            width: "100%"
        }
    },
    /* Select time */
    select_time_box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        "& .MuiFormControlLabel-root": {
            minWidth: "130px",
            paddingBottom: "3px",
            paddingBottom: "3px",
            borderBottom: "1px solid #d3d3d3",
        }

    }
}));
export default function SelectSlote() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [time, setTime] = React.useState('female');

    const SelectTime = (event) => {
        setTime(event.target.value)
    }

    return (
        <>
            <Box className={classes.cmn_date_time_box}>
                <Box className={classes.date_box_title_close}>
                    <Typography>Select Slot Type</Typography><HighlightOffIcon />
                </Box>
                <Box class={classes.cmn_date_inner_form_box}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <Box className={classes.select_slote_radio_with_price}>
                                <FormControlLabel value="Standard" control={<Radio />} label="Standard Delivery" />
                                <Typography>Free</Typography>
                            </Box>
                            <Box className={classes.select_slote_radio_with_price}>
                                <FormControlLabel value="Midnight" control={<Radio />} label="Midnight Delivery" /> <Typography>Rs.249</Typography>
                            </Box>
                            <Box className={classes.select_slote_radio_with_price}>
                                <FormControlLabel value="Fixtime" control={<Radio />} label="Fixtime Delivery" />
                                <Typography>Rs.150</Typography>
                            </Box>
                            <Box className={classes.select_slote_radio_with_price}>
                                <FormControlLabel value="Early" control={<Radio />} label="Early Morning" /><Typography>Rs.200</Typography> </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
            <Box className={classes.cmn_date_time_box}>
                <Box className={classes.date_box_title_close}>
                    <Typography>Select Time</Typography><HighlightOffIcon />
                </Box>
                <Box class={`${classes.cmn_date_inner_form_box} ${classes.select_time}`}>
                    <FormControl component="fieldset" >
                        <RadioGroup aria-label="gender" name="gender1" value={time} onChange={SelectTime}>
                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="10" control={<Radio />} label="10AM-11AM" />
                                <FormControlLabel value="11" control={<Radio />} label="11AM-12PM" />
                            </Box>
                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="12" control={<Radio />} label="12AM-1PM" />
                                <FormControlLabel value="1" control={<Radio />} label="1AM-2PM" />
                            </Box>
                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="2" control={<Radio />} label="2PM-3PM" />
                                <FormControlLabel value="3" control={<Radio />} label="3PM-4PM" />
                            </Box>
                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="4" control={<Radio />} label="4PM-5PM" />
                                <FormControlLabel value="5" control={<Radio />} label="5PM-6PM" />
                            </Box>
                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="6" control={<Radio />} label="6PM-7PM" />
                                <FormControlLabel value="7" control={<Radio />} label="7PM-8PM" />
                            </Box>
                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="8" control={<Radio />} label="8PM-9PM" />
                                <FormControlLabel value="9" control={<Radio />} label="9PM-10PM" />
                            </Box>

                            <Box className={classes.select_time_box}>
                                <FormControlLabel value="101" control={<Radio />} label="10PM-11PM" />

                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </>
    );
}
