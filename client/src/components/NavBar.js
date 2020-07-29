import React from 'react';
// import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import { AppBar, Toolbar, Grid } from '@material-ui/core/';
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
        flexGrow: 1,
        textTransform: "uppercase"
    },
}));


const NavBar = (props) => {
    const classes = useStyles();

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
    return (

        <div className={classes.root}>
            <Grid item>
                <AppBar color="default" position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.title}>
                            Resource List
                </Typography>


                        <GoogleBtn />
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    );
}


export default NavBar;