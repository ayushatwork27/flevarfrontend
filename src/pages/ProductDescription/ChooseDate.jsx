import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    model_title: {
        color: "#222",
        fontWeight: "600",
        borderBottom: "1px solid #8080806b",
        paddingBottom: "10px"
    }
}));


export default function ChooseDate() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Box>
            <Typography variant="h5" className={classes.model_title}>Select Delivery Date</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container >
                    <KeyboardDatePicker
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Choose  Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </Box>
    );
}
