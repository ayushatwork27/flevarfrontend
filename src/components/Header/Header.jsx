import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MoreIcon from "@material-ui/icons/MoreVert";
import { NavLink, Link } from "react-router-dom";
import Box from "@material-ui/core//Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import CmnButton from '../../components/CmnButton/CmnButton';
import { authenticateLogOut, addPincodeAction } from "../../shared/store/actions/app.actions";
import CustomeContainer from "../CustomeContainer/CustomeContainer"
import { getCartAction } from "../../shared/store/actions/cart.actions";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { LOCATION_ID } from '../../shared/constants/app.constants';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    header_mega_wrapper: {
        "& .MuiToolbar-gutters": {
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.3s ease",

        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#00000008",
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(0, 0, 0, 0.23)",
    },
    inputRoot: {
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: " 5px"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "0ch",
        // "&:focus": {
        //     width: "20ch",
        // },
        [theme.breakpoints.down("sm")]: {
            width: "0ch",
            "&:focus": {
                width: "15ch",
                backgroundColor: "#0000001c",
            }

        },
        [theme.breakpoints.down("xs")]: {
            "&:focus": {
                width: "8ch",
            }

        },

    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    },
    logo: {
        color: "#E8656B",
    },
    location_title: {
        padding: "10px",
        letterSpacing: "1px",
        fontSize: "16px",
    },
    menu_link: {
        color: "#222",
        padding: "10px",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
        letterSpacing: "1px",
        textDecoration: "none",
        "&:hover": {
            color: "#222222",
            fontWeight: "600"
        },
    },
    mobilemenulink: {
        display: "flex",
        flexFlow: "column",
        height: "100%",
        padding: "0px 35px 0px 4px"
    },
    desktop_link_wrapper: {
        display: "flex",
        alignItems: "center",
    },
    mobile_logo: {
        maxWidth: "121px",
        marginTop: "10px",
        textAlign: 'center',
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }, location_single_box: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        "& button": {
            position: "absolute",
            zIndex: "55",
            backgroundColor: "#fff",
            color: "#222",
            "&:hover": {
                backgroundColor: "#fff",
            }
        }
    },
    content_box: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        height: "100%",
        "& p:nth-of-type(1)": {
            marginBottom: "20px"
        },
        "& p:nth-of-type(2)": {
            color: "#222",
            maxWidth: "353px",
            fontWeight: "600",
            fontSize: "30px"
        }
    },
    sectionMobile: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    },
    selectedLocation: {
        backgroundColor: "#E8657D !important",
        color: "#fff !important"
    },
    dialog_title: {
        padding: "10px 15px",
        borderBottom: "1px solid #80808059",
        "& h2": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        "& svg": {
            cursor: "pointer",
            paddingLeft: "5px"
        }
    },
    dialog_content: {
        padding: "50px"
    },
    description_messages_wrapper: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F4F4F4",
        marginTop: "40px",
    },
    send_btn: {
        border: "none",
        borderLeft: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "0",
        paddingLeft: "30px",
    },
    description_messages_input: {
        borderRadius: "0px",
        "& .MuiFilledInput-root": {
            borderRadius: "0px",
            backgroundColor: "#F4F4F4",
        },
        "& .Mui-focused": {
            color: "#000;",
            fontFamily: "Montserrat",
        },
    }
}));

export default function PrimarySearchAppBar() {

    const defaultLocatioId = localStorage.getItem(LOCATION_ID);
    // const renderMobileMenu = null;
    const { cartItems } = useSelector(state => state.cart);

    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openPincodeView, setPincodeView] = useState(false);
    const [selectedLocation, setselectedLocation] = useState(defaultLocatioId ? { id: +defaultLocatioId } : null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [pincode, updatePincode] = useState('');

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    useEffect(() => dispatch(getCartAction()), []);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const [open, setOpen] = useState(false);
    const logOut = () => {
        const mobile = localStorage.getItem('mobile');
        dispatch(authenticateLogOut({ mobile }));
    }

    const { user, locations } = useSelector(state => state.app);

    const locationSelection = (location) => {
        setselectedLocation(location);
        setPincodeView(true);
    }

    const handleClosePincodeView = () => {
        setPincodeView(false);
        if (defaultLocatioId) setselectedLocation({ id: +defaultLocatioId });
        else setselectedLocation(null);
    }

    const checkPincode = (data) => {
        const pincodeIndex = selectedLocation.location_pincodes.findIndex(prop => prop.pincode === +data);
        if (pincodeIndex > -1) {
            dispatch(addPincodeAction({ location_id: selectedLocation.id, pincode: data }));
            setPincodeView(false);
        }
    }

    const menuId = "primary-search-account-menu";

    const getTotalCartQuantity = () => {
        if (!cartItems || !cartItems.length) return null;
        return cartItems[0]['cart_items'].reduce((quantity, cartItem) => quantity + cartItem['quantity'], 0);
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {
                user && user.name ?

                    <div>
                        <MenuItem onClick={handleMenuClose}>
                            <h4>{user?.name}</h4>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/profile_update" className="text-black">Account</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/orders" className="text-black">Orders</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/" onClick={logOut} className="text-black">LogOut</Link>
                        </MenuItem>
                    </div>
                    :
                    <div>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/register" className="text-black">SignUp</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/login" className="text-black">LogIn</Link>
                        </MenuItem>
                    </div>
            }
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    /* for mobile option start */
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit" component={Link}
                    to="/mycart">
                    <Badge badgeContent={getTotalCartQuantity()} color="secondary">
                        <LocalMallIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    /* for mobile option start */
    const menuputtertop = (
        <>

            <Link to="/" className={classes.logo}>
                <Typography className={classes.mobile_logo} variant="h6" noWrap>
                    <img
                        src="/assets/images/flevarlogo.png"
                        alt=""
                        style={{ maxWidth: "100px" }}
                    />
                </Typography>
            </Link>
            <Box className="location-box-mega-wrapper">
                <div className="hover-wrapper">
                    <Grid container >
                        <Grid sm={12} md={6} lg={6} item className="hover-box-conent">
                            <Box className={classes.content_box}>
                                <Typography
                                    variant="body1"
                                    className="onhover-small-title">
                                    SERVING NOW
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className="onhover-header">
                                    Cities where we are Delivering right now!
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid sm={12} md={6} lg={6} item>
                            <Box className="location-wrapperbox">
                                <Grid container className="home-onhover-location-right-wrapper" >
                                    {
                                        locations && locations.map((val, i) => {
                                            return (
                                                <Grid item sm={6} md={4} className={` home-onhover-location-singlebox ${classes.location_single_box}`} key={i}>
                                                    <img src={val.image_url} alt="cityimage" />
                                                    <CmnButton btntitle={val.name}
                                                        className={selectedLocation && selectedLocation.id === val.id ? classes.selectedLocation : null}
                                                        onClick={() => { locationSelection(val) }} />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Typography variant="body2" className={`header-location-link ${classes.location_title}`}>
                    LOCATIONS
                </Typography>
            </Box>
            {/* <NavLink
                exact
                to="/"
                className={classes.menu_link}
                activeClassName="active_link"
            >
                Home
            </NavLink> */}
            <NavLink
                to="/about"
                className={classes.menu_link}
                activeClassName="active_link"
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={classes.menu_link}
                activeClassName="active_link"
            >
                Contact
            </NavLink>
        </>
    );

    return (
        <div className={classes.grow}>
            <CustomeContainer>
                <AppBar position="static" elevation={0} className={`header-wrapper ${classes.header_mega_wrapper} `}>
                    <Toolbar className={`cmn-main-container  ${classes.main_header}`}>
                        <Hidden lgUp>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Link to="/" className={classes.logo}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                <img
                                    src="/assets/images/flevarlogo.png"
                                    alt=""
                                    style={{ maxWidth: "100px" }}
                                />
                            </Typography>
                        </Link>

                        <div className={classes.grow} />
                        <Hidden mdDown>
                            <Box className={classes.desktop_link_wrapper}>{menuputtertop}</Box>
                        </Hidden>
                        <Box className={classes.search} component={Link} to="/searchpage">
                            <Box className={classes.searchIcon} >
                                <SearchIcon />
                            </Box>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Box>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                aria-label="show 4 new mails"
                                color="inherit"
                                component={Link}
                                to="/mycart"
                            >
                                <Badge badgeContent={getTotalCartQuantity()} color="secondary">
                                    <LocalMallIcon />
                                </Badge>
                            </IconButton>

                            <IconButton
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"

                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                edge="end"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"

                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Dialog
                    open={openPincodeView}
                    onClose={handleClosePincodeView}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.dialog_title}>
                        {"Pincode"}
                        <HighlightOffIcon onClick={handleClosePincodeView} />
                    </DialogTitle>
                    <DialogContent className={classes.dialog_content}>
                        <form noValidate autoComplete="off">
                            <Box className={classes.description_messages_wrapper}>
                                <TextField
                                    id="filled-basic"
                                    fullWidth
                                    variant="filled"
                                    label="Type to check pincode"
                                    type="number"
                                    maxLength={6}
                                    className={classes.description_messages_input}
                                    disableunderline="true"
                                    value={pincode}
                                    onChange={e => updatePincode(e.target.value)}
                                />
                                <CmnButton
                                    variant="outlined"
                                    className={classes.send_btn}
                                    startIcon={<ArrowForwardIcon />}
                                    onClick={() => checkPincode(pincode)}
                                />
                            </Box>
                        </form>
                    </DialogContent>
                </Dialog>
            </CustomeContainer>
            {renderMobileMenu}
            {renderMenu}
            <SwipeableDrawer
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Hidden lgUp>
                    <Box className={classes.mobilemenulink}>{menuputtertop}</Box>
                </Hidden>
            </SwipeableDrawer>
        </div>
    );
}
