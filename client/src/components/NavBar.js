import React from 'react';
import {
    Link
} from "react-router-dom";
// import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import { AppBar, Toolbar, Grid, Button, Menu, MenuItem, IconButton, Hidden, Dialog, DialogTitle, DialogContent } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
// import { AccountCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import GoogleBtn from './GoogleBtn';
// import { AuthContext } from '../contexts/authContext';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {

        textTransform: "uppercase"
    },
    navbar: {
        flexGrow: 1,
        marginLeft: '25px'
    },
    navButton: {
        fontWeight: theme.typography.fontWeightLight,
        /* fontSize: theme.typography. */
    }
}));



const NavBar = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleDialogClickOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };




    // const { isAuthenticated } = useContext(AuthContext);
    /* const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let authButtons = isAuthenticated ? (<div>
        <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem > <GoogleBtn /> </MenuItem>
        </Menu>
    </div>) :
        <GoogleBtn />; */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <div className={classes.root}>
            <Grid item>
                <AppBar color="default" position="static">

                    <Toolbar>

                        <Button variant="text" component={Link} to="/">
                            <Typography variant="h6" color="inherit" className={classes.title}>
                                Resource List
                            </Typography>
                        </Button>

                        <Hidden xsDown implementation="js">
                            <nav className={classes.navbar}>
                                <Button size="large" className={classes.navButton} component={Link} to="/create">
                                    Create
        </Button>
                                <Button size="large" className={classes.navButton} component={Link} to="/profile">
                                    Profile
        </Button>


                            </nav>
                        </Hidden>
                        <Hidden smUp implementation="js">
                            <IconButton aria-label="delete" aria-haspopup="true" onClick={handleClick}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Create</MenuItem>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>

                            </Menu>
                        </Hidden>
                        <Button size="large" variant="outlined" onClick={handleDialogClickOpen} className={classes.navButton}>
                            Login/Signup
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleDialogClose}
                        >
                            <DialogTitle>Login with:</DialogTitle>
                            <DialogContent>

                                <GoogleBtn />
                            </DialogContent>
                        </Dialog>
                    </Toolbar>
                </AppBar>
            </Grid>
        </div >
    );
}


export default NavBar;