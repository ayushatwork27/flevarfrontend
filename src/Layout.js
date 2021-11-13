import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Globalmaterilcss";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box } from "@material-ui/core";

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box className="spacer"></Box>
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
