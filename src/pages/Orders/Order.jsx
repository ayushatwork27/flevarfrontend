import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import Profile from "../../components/Pofile/Profile";
import OrderTabs from "./OrderTabs";
import WishlistTabs from "./WishlistTabs";
import CmnButton from "../../components/CmnButton/CmnButton";
import { Link } from "react-router-dom";
import HelpTabs from "./HelpTabs";
import LogoutButton from "../../components/LogOutButton/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersListAction } from "../../shared/store/actions/order.actions";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Order() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <CustomeContainer>
            <Grid container>
                <Grid sm={12} md={3} item>
                    <Box>
                        <Profile />
                        <Box className="cmn-profile_bottom_btn">
                            <Box component={Link} to="/profile_update">
                                <CmnButton btntitle="Edit Details" variant="outlined" />
                            </Box>
                            <LogoutButton />
                        </Box>
                    </Box>
                </Grid>
                <Grid sm={12} md={9} item>
                    <Box className="cmn-tabs_wrapper">
                        <AppBar position="static" className="order-tabs">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="simple tabs example"
                            >
                                <Tab label="Orders" {...a11yProps(0)} />
                                {/* <Tab label="wishlist" {...a11yProps(1)} /> */}
                                <Tab label="help" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <OrderTabs />
                        </TabPanel>
                        {/* <TabPanel value={value} index={1}>
              <WishlistTabs />
            </TabPanel> */}
                        <TabPanel value={value} index={2}>
                            <HelpTabs />
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </CustomeContainer>
    );
}

export default Order;
