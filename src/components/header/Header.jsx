import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  IconButton,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const usestyle = makeStyles({
  manu_wrapper: {
    display: "flex",
  },
});

const Header = () => {
  const classes = usestyle();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            className={classes.menuicon}
          >
            <MenuIcon />
          </IconButton> */}
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              FLEVAR
            </Typography>
          </Link>
          <List
            component="nav"
            aria-label="contacts"
            className={classes.manu_wrapper}
          >
            <ListItem button>
              <ListItemText primary="Location" />
            </ListItem>
            <ListItem button>
              <Link to="/about">
                <ListItemText primary="About" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/contact">
                <ListItemText primary="Contact" />
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
