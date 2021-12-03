import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CustomeContainer from '../../components/CustomeContainer/CustomeContainer'
import LogoutButton from "../../components/LogOutButton/LogoutButton";
import Profile from '../../components/Pofile/Profile';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProfileAddress from "./ProfileAddress";
import EditProfile from "./EditProfile";
import { getAddressListAction } from "../../shared/store/actions/app.actions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    add_new_address_container: {
        maxWidth: "863px"
    },
    fl_right: {
        flot: "none",
        [theme.breakpoints.up("md")]: {
            float: "right",
        }
    },
    w_50: {
        minWidth: "340px",
        maxWidth: "422px",
        width: "100%"
    },
    add_new_address_title: {
        color: "#222222",
        fontWeight: "600",
        fontSize: "26px",
        margin: "30px 0px 30px 0px"
    },
    addbtn_addNewAddress: {
        backgroundColor: "#222222",
        color: "#fff",
        padding: "15px 80px !important",
        "&:hover": {
            backgroundColor: "#222222",
        },
        flot: "none",
        [theme.breakpoints.up("md")]: {
            float: "right",
        }
    }

}));
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


function ProfileUpdate() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let dispatch = useDispatch();

    const { user } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(getAddressListAction(user && user.id));
    }, [user && user.id]);

    const { addressList } = useSelector(state => state.app);

    return <>
        <CustomeContainer>
            <Grid container>
                <Grid sm={12} md={3} item>
                    <Box>
                        <Profile />
                        <Box className="cmn-profile_bottom_btn">
                            <LogoutButton />
                        </Box>
                    </Box>
                </Grid>

                <Grid sm={12} md={9} item>
                    <Box className={` `}>
                        <Box className="cmn-tabs_wrapper">
                            <AppBar position="static" className="order-tabs">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="simple tabs example"
                                >
                                    <Tab label="EDIT PROFILE DETAILS" {...a11yProps(0)} />
                                    <Tab label="ADDRESSES" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <EditProfile flevarUser={user} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <ProfileAddress addressList={addressList} />
                            </TabPanel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </CustomeContainer>
    </>;
}

export default ProfileUpdate;