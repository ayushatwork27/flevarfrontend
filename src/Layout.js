import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Globalmaterilcss";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1598px",
    padding: "0px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
}));
function Layout({ children }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
