import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        img: {
          maxWidth: "100%",
          height: "auto",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      padding: "20px 30px",
    },
    MuiTypography: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
  // palette: {
  //   primary: {
  //     main: "#fff",
  //   },
  //   secondary: {
  //     main: "#000",
  //     light: "#0066ff",
  //   },
  //   neutral: {
  //     main: "#000",
  //   },
  //   info: {
  //     main: "#0066ff",
  //   },
  // },
});
export default theme;
