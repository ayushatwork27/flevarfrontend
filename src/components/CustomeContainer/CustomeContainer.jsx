import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1598px",
    padding: "0px 15px !important",
  },
}));
function CustomeContainer({ children }) {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
}

export default CustomeContainer;
