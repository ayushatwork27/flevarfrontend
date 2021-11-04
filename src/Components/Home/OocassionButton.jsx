import React from "react";

import CmnButton from "../CmnButton/CmnButton";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  cmnOccasionBtn: {
    backgroundColor: "rgba(244, 244, 244, 1)",
    padding: "20px 35px !important",
    borderRadius: "64px",
    lineHeight: "0px",
    color: "#222",
    marginRight: "15px",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      padding: "17px 10px !important",
      borderRadius: "15px",
      marginRight: "8px",
    },
  },
}));
function OocassionButton() {
  const classes = useStyles();
  return (
    <>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Birthday"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Anniversary"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Romantic"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Party"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Congratulations"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="House Warming"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Thank You"
      ></CmnButton>
      <CmnButton
        variant="contained"
        className={classes.cmnOccasionBtn}
        btntitle="Farewell"
      ></CmnButton>
    </>
  );
}

export default OocassionButton;
