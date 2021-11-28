import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    // maxWidth: "360px",
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
      borderBottom: "1px solid #d3d3d3",
    },
  },
  select_slot_type_wrapper: {
    width: "350px",
  },
}));
export default function SelectSlote(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.cmn_date_time_box}>
        <Box
          className={`${classes.cmn_date_inner_form_box} ${classes.select_slot_type_wrapper}`}
        >
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={props.value}
              onChange={props.onChange}
            >
              {props.slot_types.map((sloat, i) => {
                return (
                  <Box
                    className={classes.select_slote_radio_with_price}
                    key={i}
                  >
                    <FormControlLabel
                      value={sloat.delivery}
                      control={<Radio />}
                      label={sloat.delivery}
                    />
                    <Typography>Rs.{sloat.charge}</Typography>
                  </Box>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
