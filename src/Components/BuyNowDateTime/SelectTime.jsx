import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ClassSharp } from "@material-ui/icons";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  w_100: {
    width: "100%",
  },
  /* Cmn style */
  select_slote_radio_with_price: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cmn_date_time_box: {
    // boxShadow: "0 2px 30px 0 rgba(0 ,0 ,0 ,0.17)",
    backgroundColor: "#fff",
    borderRadius: "10px",
    maxWidth: "360px",
  },
  date_box_title_close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #d3d3d3",
    padding: "15px",
  },
  cmn_date_inner_form_box: {
    padding: "15px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
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
    },
  },
}));

function SelectTime(props) {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.cmn_date_time_box}>
        <Box
          className={`${classes.cmn_date_inner_form_box} ${classes.select_time}`}
        >
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={props.time}
              onChange={props.timeChange}
            >
              <Grid container>
                {props.time_slots.map((time, i) => {
                  return (
                    <Grid
                      item
                      sm={6}
                      className={classes.select_time_box}
                      key={i}
                    >
                      <FormControlLabel
                        value={time.timesloat}
                        control={<Radio />}
                        label={time.timesloat}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}

export default SelectTime;
