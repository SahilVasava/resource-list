import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const Create = () => {
    const classes = useStyles();

    return (
        <div>

            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Create a resources list
                        </Typography>
                        <form>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="subject"
                                label="Subject"
                                name="subject"
                                autoFocus
                            />
                        </form>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Create;
