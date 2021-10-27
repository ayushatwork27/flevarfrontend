import { AppBar, Toolbar, makeStyles, withStyles, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

// component
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

const usestyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    }
});

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

const Header = () => {
    const classes = usestyle();
    const logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to="/" className={classes.component}>
                    <img src={logoUrl} alt="logo" className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: '#FFE500' }}>Plus</Box></Typography>
                        <img src={subURL} alt="sub-logo" className={classes.subURL}></img>
                    </Box>
                </Link>
                <SearchBar />
                <HeaderButtons />
            </ToolBar>
        </AppBar>
    )
}

export default Header;