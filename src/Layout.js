import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Globalmaterilcss";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box } from "@material-ui/core";
// import Loader from "./components/Loader/Loader";

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <Loader/>  */}
      <Box className="spacer"></Box>
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
