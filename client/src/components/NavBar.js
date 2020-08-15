import React, { useContext, useEffect } from 'react';
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
import { AuthContext } from '../contexts/authContext';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {

        textTransform: "uppercase",
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1
        }
    },
    navbar: {
        flexGrow: 1,
        marginLeft: '25px'
    },
    navButton: {
        fontWeight: theme.typography.fontWeightLight,
    },
    dialogContent: {
        marginBottom: '1em'
    },
    toolbar: {

        justifyContent: 'space-between'
    }
}));



const NavBar = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const { isAuthenticated, setToken, setIsAuthenticated } = useContext(AuthContext);

    const handleDialogClickOpen = () => {
        setOpen(true);
        setAnchorEl(null);

    };

    const handleDialogClose = () => {
        setOpen(false);
    };




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

    const authButton = (

        isAuthenticated ? <GoogleBtn dialogClose={handleDialogClose} /> :
            <Button size="large" variant="outlined" onClick={handleDialogClickOpen} className={classes.navButton}>
                Login/Signup
                        </Button>
    )
    const authMenuButton = (

        isAuthenticated ? <GoogleBtn dialogClose={handleDialogClose}
            render={renderProps => (

                <MenuItem onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</MenuItem>
            )}
        /> :
            <MenuItem onClick={handleDialogClickOpen}>Login/Signup</MenuItem>
    )
    useEffect(() => {

        let token = JSON.parse(localStorage.getItem('token'));

        if (token && new Date(token.expires_at).getTime() >= new Date().getTime()) {
            setIsAuthenticated(true);
            setToken(token);

        } else {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            setToken('');
        }

    }, [setIsAuthenticated, setToken]);
    return (

        <div className={classes.root}>
            <Grid item>
                <AppBar color="default" position="static">

                    <Toolbar className={classes.toolbar} disableGutters={false}>

                        <Button variant="text" component={Link} to="/">
                            <Typography variant="h6" color="inherit" className={classes.title}>
                                Resource List
                            </Typography>
                        </Button>

                        <Hidden xsDown implementation="js">
                            <nav className={classes.navbar}>
                                {isAuthenticated ?
                                    <Button size="large" className={classes.navButton} component={Link} to="/create">
                                        Create
        </Button> : null}
                                {isAuthenticated ?
                                    <Button size="large" className={classes.navButton} component={Link} to="/profile">
                                        Profile
        </Button> : null}


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
                                <MenuItem onClick={handleClose} component={Link} to="/create">Create</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                                {authMenuButton}
                            </Menu>
                        </Hidden>
                        <Hidden xsDown implementation="js">
                            {authButton}
                        </Hidden>

                        <Dialog
                            open={open}
                            onClose={handleDialogClose}
                        >
                            <DialogTitle>Login with:</DialogTitle>
                            <DialogContent
                                className={classes.dialogContent}
                            >

                                <GoogleBtn dialogClose={handleDialogClose} />
                            </DialogContent>
                        </Dialog>
                    </Toolbar>
                </AppBar>
            </Grid>
        </div >
    );
}


export default NavBar;