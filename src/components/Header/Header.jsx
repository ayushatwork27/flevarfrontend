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
import OnHoverLocation from "../../pages/OnHoverLocation/OnHoverLocation";
import { resetUserProfile } from "../../shared/store/actions/userActions"
import { getCartAction } from "../../shared/store/actions/cart.actions";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        textDecoration: "none",
        color: "inherit",
        // backgroundColor: "#00000008",
        transition: "all 0.3s ease",

        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#00000008",
        },
        // "&:hover": {
        //   backgroundColor: "#0000001c",
        // },
        // "&:focus": {
        //   backgroundColor: "#0000001c",
        // },
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
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "0ch",
        "&:focus": {
            width: "20ch",
        },
        [theme.breakpoints.down("sm")]: {
            width: "0ch",
            "&:focus": {
                width: "15ch",
                backgroundColor: "#0000001c",
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
    }
}));

export default function PrimarySearchAppBar() {
    const renderMobileMenu = null;
    const profiles = useSelector(state => state.getUser);
    const { cartItems } = useSelector(state => state.cart);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

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
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(resetUserProfile())
        localStorage.clear();
    }

    useEffect(() => dispatch(getCartAction()), []);
    const menuId = "primary-search-account-menu";

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
                profiles && profiles.success ?
                    <>
                        <MenuItem onClick={handleMenuClose}>
                            <h4>{profiles?.data?.data?.name}</h4>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link>Account</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/" onClick={logOut}>LogOut</Link>
                        </MenuItem>
                    </>
                    :
                    <>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/register">SignUp</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/login">LogIn</Link>
                        </MenuItem>
                    </>
            }
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    // const renderMobileMenu = (
    //       <Menu
    //           anchorEl={mobileMoreAnchorEl}
    //           anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //           id={mobileMenuId}
    //           keepMounted
    //           transformOrigin={{ vertical: "top", horizontal: "right" }}
    //           open={isMobileMenuOpen}
    //           onClose={handleMobileMenuClose}
    //       >
    //         <AccountCircle />
    //       </IconButton>
    //       <p>Profile</p>
    //     </MenuItem >
    //   </Menu >
    // );
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
            <Typography variant="body2" className={`header-location-link ${classes.location_title}`}>
                LOCATION
            </Typography>
            <NavLink
                exact
                to="/"
                className={classes.menu_link}
                activeClassName="active_link"
            >
                Home
            </NavLink>
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
            <AppBar position="static" elevation={0} className={`header-wrapper `}>
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
                    <div className="onhover-location">
                        <OnHoverLocation />
                    </div>

                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                            component={Link}
                            to="/mycart"
                        >
                            <Badge badgeContent={cartItems.map(item => item['cart_items']&& item['cart_items'].length?item['cart_items'][0]['quantity']: 0).reduce((a, b) => a + b, 0)} color="secondary">
                            <LocalMallIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
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