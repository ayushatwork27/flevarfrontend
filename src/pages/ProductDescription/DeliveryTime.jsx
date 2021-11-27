import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    model_title: {
        color: "#222",
        fontWeight: "600"
    },
    model_deliverTimeWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #8080806b",
        paddingBottom: "10px",
    },
    ShippingCharge_box: {
        whiteSpace: "nowrape",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#222",
        "& p": {
            color: "rgba(216, 109, 110, 1)",
            fontWeight: "600",
            fontSize: "20px"
        }
    }
}));

export default function DeliveryTime() {
    const classes = useStyles();
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Box>
            <Box className={classes.model_deliverTimeWrapper}>
                <Typography variant="h5" className={classes.model_title}>Select Delivery Time</Typography>
                <Typography className={classes.ShippingCharge_box}>Shipping Charge: <Typography variant="body1"> Rs.250</Typography></Typography>
            </Box>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </Box >
    );
}
