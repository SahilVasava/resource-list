import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    },
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
    resForm: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));



const Create = () => {
    const classes = useStyles();
    const [subject, setSubject] = useState('');
    const [resource, setResource] = useState([]);
    const handleCatChange = (index, event) => {
        /* let newRes = [...resource];
        newRes[index] = { ...newRes[index], cat: event.target.value }
        setResource(newRes); */
        setResource(resource.map((item, ind) =>
            ind === index
                ? { ...item, cat: event.target.value }
                : item
        ))
    };
    const handleLinkChange = (index, event) => {
        setResource(resource.map((item, ind) =>
            ind === index
                ? { ...item, link: event.target.value }
                : item
        ))
    };
    const handleSubChange = (event) => {
        setSubject(event.target.value);
    };



    const addResource = () => {
        setResource([...resource, { cat: '', link: '' }]);
    }

    const submitResourceList = (e) => {
        e.preventDefault();
        console.log(subject, resource)
    }

    return (
        <div>

            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Create a resources list
                        </Typography>
                        <form onSubmit={submitResourceList}>
                            <FormControl
                                margin="normal"
                                className={classes.formControl}>
                                <TextField
                                    required
                                    fullWidth
                                    id="subject"
                                    label="Subject"
                                    name="subject"
                                    value={subject}
                                    onChange={handleSubChange}
                                />
                            </FormControl>



                            {resource.map((item, index) => {
                                return (
                                    <div className={classes.resForm} key={index}>
                                        <FormControl
                                            margin="normal"
                                            className={classes.formControl}>
                                            <InputLabel >Category</InputLabel>
                                            <Select

                                                value={item.cat}
                                                onChange={(e) => handleCatChange(index, e)}
                                            >
                                                <MenuItem value='book'>Books</MenuItem>
                                                <MenuItem value='course'>Courses</MenuItem>
                                                <MenuItem value='ytchannel'>Youtube Channel</MenuItem>
                                                <MenuItem value='website'>Website</MenuItem>
                                                <MenuItem value='blog'>Blog</MenuItem>
                                                <MenuItem value='podcast'>Podcast</MenuItem>
                                                <MenuItem value='other'>Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl
                                            margin="normal"
                                            className={classes.formControl}>
                                            <TextField
                                                fullWidth
                                                id="link"
                                                label="Link"
                                                name="link"
                                                value={item.link}
                                                onChange={(e) => handleLinkChange(index, e)}
                                            />
                                        </FormControl>
                                    </div>
                                )
                            })}


                            <FormControl>
                                <Button color="primary" onClick={addResource} variant="contained">Add Resource</Button>
                            </FormControl>
                            <FormControl>
                                <Button color="primary" type="submit" variant="contained">Save</Button>
                            </FormControl>
                        </form>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Create;
