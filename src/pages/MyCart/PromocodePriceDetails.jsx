import React, { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateFnsUtils from "@date-io/date-fns";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SelectSlote from "../../components/BuyNowDateTime/SelectSlote";
import SelectTime from "../../components/BuyNowDateTime/SelectTime";
import slot_types from "./slot_types";
import main_slot_types from "./main_slot_types";
import "date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
    promo_code_price_details_wrapper: {
        marginTop: "30px",
        marginLeft: "20px",
        [theme.breakpoints.up("lg")]: {
            marginLeft: "40px",
        },
        [theme.breakpoints.up("xl")]: {
            marginLeft: "60px",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0px",
        },
    },
    promo_code_title: {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "15px",
    },
    promocode_wrapper: {
        display: "flex",
        alignItems: "center",
    },
    promocode_input: {
        border: "1px solid #707070",
        paddingLeft: "5px",
        maxWidth: "336px",
        width: "100%",
        "& .MuiInput-underline:before": {
            display: "none",
        },
        "& .MuiInput-underline:after": {
            display: "none",
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "280px",
        },
    },
    applybtn: {
        backgroundColor: "#222",
        color: "#fff",
        padding: "5px 20px !important",
        marginLeft: "15px",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
    },
    promo_helper_text: {
        color: "#222",
        marginTop: "5px",
    },
    price_details_title: {
        margin: "30px 0px 10px 0px",
    },
    totalQuantity: {
        color: "#525050",
        fontWeight: 300,
    },
    cmn_price_discount_amount_main_ceontainer: {
        borderTop: "1px solid #f4f4f4",
        paddingTop: "13px",
        marginTop: "13px",
        maxWidth: "435px",
    },

    cmn_price_discount_amount_wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "12px",
        maxWidth: "435px",
    },

    cmn_price_discount_amount_title: {
        color: "#525050",
        fontWeight: 300,
    },
    cmn_price_discount_amount_value: {
        color: "#222",
        fontWeight: 600,
    },
    total: {
        fontSize: "20px",
    },

    checkoutBtn: {
        textAlign: "right",
        marginTop: "15px",
        marginLeft: "auto",
        display: "inherit",
    },
    date_shown_box: {
        border: "1px solid #a59b9b",
        position: "relative",
        width: "350px",
        height: "30px",
        paddingLeft: "5px",
        [theme.breakpoints.down("sm")]: {
            width: "325px",
        },
    },
    calender_icon: {
        position: "absolute",
        right: "5px",
        top: "1px",
        cursor: "pointer",
    },
    dialog_title: {
        padding: "10px 15px",
        borderBottom: "1px solid #80808059",
        "& h2": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        "& svg": {
            cursor: "pointer",
            paddingLeft: "5px",
        },
    },
    // dialog_title: {
    //   padding: "0px 5px",
    // },
    dialog_content: {
        padding: "0px 0px",
    },
    popup_footer: {
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #80808059",
        "& p:nth-of-type(2)": {
            color: "#cd4978",
            fontWeight: 500,
            cursor: "pointer",
        },
    },
}));

function PromocodePriceDetails({ deliveryDate }) {
    const classes = useStyles();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [timeSlots, setTimeSlot] = useState([]);
    const [open, setOpen] = useState(false);
    const [openSloat, setSloat] = useState(false);
    const [openTime, setTime] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startMinDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('"Standard Delivery');
    const [deliverytime, setdeliveryTime] = useState("");
    const [selectedDateString, setSelectedDateStirng] = useState("");
    const [todaysSlotTypes, setTodysSlotType] = useState([]);
    const [tomorrowSlotTypes, setTomorrowSlotType] = useState([]);
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const todaysDate = new Date();
        const currentHour = todaysDate.getHours();
        setSlots(slot_types);
        if (currentHour >= 0 && currentHour <= 8) {
            let filteredSlots = slot_types.filter((slot) => slot.key !== "early");
            filteredSlots.map((slot) => {
                if (slot.key === "standard") {
                    slot.time_slots = slot.time_slots.filter(
                        (time_slot) => time_slot.key !== "9am-12pm"
                    );
                } else if (slot.key === "fix") {
                    slot.time_slots = slot.time_slots.filter(
                        (time_slot) => time_slot.key > 12
                    );
                }
            });
            setTodysSlotType(filteredSlots);
        } else if (currentHour >= 8 && currentHour <= 12) {
            let filteredSlots = slot_types.filter((slot) => slot.key !== "early");
            filteredSlots.map((slot) => {
                if (slot.key === "standard") {
                    slot.time_slots = slot.time_slots.filter(
                        (time_slot) =>
                            time_slot.key !== "9am-12pm" && time_slot.key !== "12pm-3pm"
                    );
                } else if (slot.key === "fix") {
                    const filterTime = currentHour + 4;
                    slot.time_slots = slot.time_slots.filter(
                        (time_slot) => time_slot.key > filterTime
                    );
                }
            });
            setTodysSlotType(filteredSlots);
        } else if (currentHour > 12 && currentHour < 18) {
            let filteredSlots = slot_types.filter((slot) => slot.key !== "early");
            filteredSlots.map((slot) => {
                if (slot.key === "standard") {
                    slot.time_slots = slot.time_slots.filter(
                        (time_slot) =>
                            time_slot.key !== "9am-12pm" &&
                            time_slot.key !== "12pm-3pm" &&
                            time_slot.key !== "3pm-6pm"
                    );
                } else if (slot.key === "fix") {
                    const filterTime = currentHour + 4;
                    slot.time_slots = slot.time_slots.filter(
                        (time_slot) => time_slot.key > filterTime
                    );
                }
            });

            setTodysSlotType(filteredSlots);
        } else if (currentHour >= 18) {
            const tomorrowDate = new Date(todaysDate.setDate(todaysDate.getDate() + 1));
            setStartDate(tomorrowDate);
            let filteredSlots = slot_types.filter((slot) => slot.key !== "early");
            setTomorrowSlotType(filteredSlots);
        }
    }, []);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleCloseSlot = () => setSloat(false);

    const handleDateChange = (date) => {
        let selected = date.getDate();
        setSelectedDateStirng(monthNames[date.getMonth()] + ", " + date.getDate());
        let todaysDate = new Date();

        if (selected === todaysDate.getDate()) setSlots(todaysSlotTypes);
        else {
            if (todaysDate.getHours > 18) setSlots(tomorrowSlotTypes);
            else setSlots(main_slot_types);
        }

        setSelectedDate(date);
        setSloat(true);
        setOpen(false);
    };

    const selectedSloat = (event) => {
        let slot1 = slots.find((slot) => slot.delivery === event.target.value);
        if (slot1) setTimeSlot(slot1.time_slots);
        else setTimeSlot([]);

        setValue(event.target.value);
        setTime(true);
        setSloat(false);
    };

    const handleCloseTime = () => {
        setTime(false);
        setSloat(false);
    };

    const backToDate = () => {
        setSloat(false);
        setOpen(true);
    };
    const backToSloat = () => {
        setSloat(true);
        setTime(false);
    };

    const getTime = (event) => {
        setdeliveryTime(event.target.value);
        setTime(false);
        setSloat(false);
    };

    return (
        <>
            <Box className={classes.promo_code_price_details_wrapper}>
                {deliveryDate ? (
                    <Box className={classes.promo_code_wrapper}>
                        <Typography variant="h5" className={classes.promo_code_title}>
                            Choose Date
                        </Typography>
                        <Box className={classes.promocode_wrapper}>
                            <form noValidate autoComplete="off">
                                <Box
                                    className={classes.date_shown_box}
                                    onClick={handleClickOpen}
                                >
                                    <Typography>
                                        {" "}
                                        {selectedDateString} {", "}
                                        {deliverytime}
                                    </Typography>
                                    <DateRangeIcon className={classes.calender_icon} />
                                </Box>
                            </form>
                        </Box>
                    </Box>
                ) : null}

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.dialog_title} id="alert-dialog-title">
                        {"Select Date"}
                        <HighlightOffIcon onClick={handleClose} />
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Box>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justifyContent="space-around">
                                        <KeyboardDatePicker
                                            minDate={startMinDate}
                                            disableToolbar
                                            variant="static"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                "aria-label": "change date",
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

                {/*Select Select Slot Type */}
                <Dialog
                    open={openSloat}
                    onClose={handleCloseSlot}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.dialog_title}>
                        {"Select Slot Type"}
                        <HighlightOffIcon onClick={handleCloseSlot} />
                    </DialogTitle>
                    <DialogContent className={classes.dialog_content}>
                        <SelectSlote
                            onChange={selectedSloat}
                            value={value}
                            slot_types={slots}
                        />
                        <Box className={classes.popup_footer}>
                            <Typography variant="body1">{selectedDateString}</Typography>
                            <Typography variant="body2" onClick={backToDate}>
                                Change Date
                            </Typography>
                        </Box>
                        {/* <SelectTime/> */}
                    </DialogContent>
                </Dialog>
                {/*Select Select Slot Type */}
                <Dialog
                    open={openTime}
                    onClose={handleCloseTime}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.dialog_title}>
                        {"Select Time"}
                        <HighlightOffIcon onClick={handleCloseTime} />
                    </DialogTitle>
                    <DialogContent className={classes.dialog_content}>
                        <SelectTime
                            time={deliverytime}
                            timeChange={getTime}
                            time_slots={timeSlots}
                        />
                        <Box className={classes.popup_footer}>
                            <Typography variant="body1">{value}</Typography>
                            <Typography variant="body2" onClick={backToSloat}>
                                Change Slot
                            </Typography>
                        </Box>
                    </DialogContent>
                </Dialog>
                {/*  */}

                <Box>
                    <Typography
                        variant="h5"
                        className={`${classes.promo_code_title} ${classes.price_details_title}`}
                    >
                        Price Details
                    </Typography>
                    <Typography variant="body1" className={classes.totalQuantity}>
                        Total Quantity : 2
                    </Typography>
                </Box>
                <Box className={classes.cmn_price_discount_amount_main_ceontainer}>
                    <Box
                        className={`flex-wraper ${classes.cmn_price_discount_amount_wrapper}`}
                    >
                        <Typography
                            variant="body1"
                            className={classes.cmn_price_discount_amount_title}
                        >
                            Price
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cmn_price_discount_amount_value}
                        >
                            Rs. 1,240
                        </Typography>
                    </Box>
                    <Box
                        className={`flex-wraper ${classes.cmn_price_discount_amount_wrapper}`}
                    >
                        <Typography
                            variant="body1"
                            className={classes.cmn_price_discount_amount_title}
                        >
                            Discount
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cmn_price_discount_amount_value}
                        >
                            Rs. 50
                        </Typography>
                    </Box>
                    <Box
                        className={`flex-wraper ${classes.cmn_price_discount_amount_wrapper}`}
                    >
                        <Typography
                            variant="body1"
                            className={classes.cmn_price_discount_amount_title}
                        >
                            Amount Payable
                        </Typography>
                        <Typography
                            variant="body1"
                            className={`${classes.cmn_price_discount_amount_value} ${classes.total}`}
                        >
                            Rs. 1,190
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default PromocodePriceDetails;
