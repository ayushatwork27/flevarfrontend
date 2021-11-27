import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import CustomeContaier from "../CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme) => ({
  footer_left_link_wrapper: {
    marginTop: "5px",
    display: "flex",
    flexFlow: "column",
    "& a": {
      color: "#4E2022",
      fontSize: "16px",
      marginBottom: "6px",
    },
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  footerwrapper: {
    backgroundColor: "#F4ECEC",
    padding: "4.5% 0px 0px 0px",
    marginTop: "8%",
  },
  subscribe_link: {
    color: "#E8656B",
    fontSize: "18px",
    letterSpacing: "2.5px",
    marginTop: "15px",
    display: "inline-block",
  },
  subscribe_input_wrapper: {
    backgroundColor: "#fff",
    padding: "8px 5px",
    maxWidth: "486px",
    borderRadius: "5px",
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
  },
  subscribeInput: {
    color: "#000",
    padding: "15px 10px",
  },
  subscribe__tilte_helpertext: {
    "& h4": {
      color: "rgba(78, 32, 34, 1)",
      fontSize: "25px",
    },
    "& p": {
      color: "rgba(78, 32, 34, 0.4)",
      margin: "7px 0px 14px 0px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px",
    },
  },
  social_wrapper: {
    color: "rgba(78, 32, 34, 1)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid  rgba(78, 32, 34, 1)",
    margin: "0px 4px",
  },
  footersocial_wrapper_grid: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
  },
  footer_logo_img: {
    maxWidth: "100px",
    marginTop: "80px",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },
  terms_condition_policy_wrapper: {
    borderTop: "1px solid #d7c3c3",
    marginTop: "20px",
    padding: "20px 0px",
  },
  terms_condition_policy_inner: {
    display: "flex",
    flexWrap: "wrape",
    justifyContent: "space-between",
    alignItems: "center",
  },
  condition_policy: {
    display: "flex",
    flexWrap: "wrape",
    alignItems: "center",
    "& a": {
      marginRight: "5px",
      display: "inline-block",
      color: "rgba(78, 32, 34, 0.36)",
      transition: "all 0.5s ease",
      "& :hover": {
        color: "rgba(78, 32, 34, 1)",
      },
    },
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerwrapper}>
        <CustomeContaier>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Box>
                <Typography variant="h6">Lorem Ipsum</Typography>
                <Box className={classes.footer_left_link_wrapper}>
                  <Link to="/">cakes liberary</Link>
                  <Link to="/">Lorem Ipsum</Link>
                  <Link to="/">Lorem Ipsum</Link>
                  <Link to="/">Lorem Ipsum</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Box className={classes.subscribe__tilte_helpertext}>
                <Typography variant="h4">What’s Baking?</Typography>
                <Typography variant="body2">
                  Subscribe to our newsletter
                </Typography>
                <Box>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="filled-basic"
                      fullWidth
                      className={classes.subscribe_input_wrapper}
                      disableunderline="true"
                    />
                  </form>

                  <Link to="/" className={classes.subscribe_link}>
                    SUBSCRIBE →
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              lg={4}
              className={classes.footersocial_wrapper_grid}
            >
              <Box>
                <Link to="/" className={classes.social_wrapper}>
                  <TwitterIcon />
                </Link>
                <Link to="/" className={classes.social_wrapper}>
                  <YouTubeIcon />
                </Link>
                <Link to="/" className={classes.social_wrapper}>
                  <FacebookIcon />
                </Link>
              </Box>
              <Box>
                <img
                  src="/assets/images/flevarlogo.png"
                  alt="footer-logo"
                  className={classes.footer_logo_img}
                />
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.terms_condition_policy_wrapper}>
            <Box className={classes.terms_condition_policy_inner}>
              <Typography variant="body2">
                © 2021 FLEV AR TECHNOLOGIES
              </Typography>
              <Box className={classes.condition_policy}>
                <Link to="/">
                  <Typography variant="body2">PRIVACY POLICY</Typography>
                </Link>
                <Link to="/">
                  <Typography variant="body2">TERMS OF SERVICE</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </CustomeContaier>
      </Box>
    </>
  );
}

export default Footer;
