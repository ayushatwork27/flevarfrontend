import { Typography } from "@material-ui/core";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  fw_bold: {
    fontWeight: 600,
    color: "#222",
  },
  fw_light: {
    fontWeight: 400,
    color: "#222",
  },
  cmn_profile_bg_spacing: {
    backgroundColor: "#F4F4F4",
    padding: "30px 50px",
    display: "flex",
    flexFlow: "column",
  },
  usename: {
    margin: "30px 0px 10px 0px",
    fontSize: "28px",
    letterSpacing: "-0.34px",
    lineHeight: "-0.34px",
  },

  pofile_bigAvtarimage: {
    width: "130px",
    height: "130px",
    margin: " 0 auto",
  },
  profile_name_city: {
    textAlign: "center",
  },
  profile_details: {
    marginTop: "10px",
  },
  single_profile_details: {
    marginBottom: "10px",
  },
  detail_title: {
    fontSize: "22px",
    letterSpacing: "-0.26px",
    lineHeight: "21px",
    marginBottom: "9px",
  },
}));
function Profile() {
  const classes = useStyles();
  const user = useSelector(state => state.app.user);
  const address = useSelector(state => state.app.addressList && state.app.addressList[0]);
  return (
    <>
      <Box>
        <Box
          className={`${classes.cmn_profile_bg_spacing} ${classes.profile_name_city}`}
        >
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/review_tabs.png"
            className={classes.pofile_bigAvtarimage}
          />
          <Typography
            variant="h5"
            className={`${classes.fw_bold} ${classes.usename}`}
          >
            {user && user.name}
          </Typography>
          <Typography
            variant="body1"
            className={`${classes.fw_light} ${classes.cityname}`}
          >
            New Town, Kolkata
          </Typography>
        </Box>
        <Box
          className={`${classes.cmn_profile_bg_spacing} ${classes.profile_details}`}
        >
          <Box className={classes.single_profile_details}>
            <Typography
              variant="h5"
              className={`${classes.fw_bold} ${classes.detail_title}`}
            >
              Email ID
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.fw_light} ${classes.detail}`}
            >
              {user && user.email}
            </Typography>
          </Box>
          <Box className={classes.single_profile_details}>
            <Typography
              variant="h5"
              className={`${classes.fw_bold} ${classes.detail_title}`}
            >
              Phone Number
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.fw_light} ${classes.detail}`}
            >
              {user && user.mobile}
            </Typography>
          </Box>
          <Box className={classes.single_profile_details}>
            <Typography
              variant="h5"
              className={`${classes.fw_bold} ${classes.detail_title}`}
            >
              Address
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.fw_light} ${classes.detail}`}
              style={{textTransform: 'capitalize'}}
            >
              {address && `${address.address_name}, ${address.line_1_address}, ${address.line_2_address} ${address.pincode}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
