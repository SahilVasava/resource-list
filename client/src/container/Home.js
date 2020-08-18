import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, CardActionArea, CardHeader, Avatar, Typography } from '@material-ui/core';
import resourceList from '../api/resourceList';

const useStyles = makeStyles((theme) => ({

    card: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        // padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            // padding: theme.spacing(3),
        },
    }
}));
const Home = () => {
    const classes = useStyles();
    const [reslists, setReslists] = useState([]);
    useEffect(() => {
        resourceList.getAllList()
            .then((res) => {
                setReslists(res.reslists);
                console.log(res);
            });
    }, []);

    return (
        <Container maxWidth="sm">
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    {reslists.map((list) => (
                        <Card className={classes.card} key={list._id}>
                            <CardActionArea component={Link} to={`${list.createdBy.username}/list/${list._id}`}>
                                <CardHeader
                                    avatar={
                                        <Avatar alt={list.createdBy.name} src={list.createdBy.img} className={classes.avatar}>
                                        </Avatar>
                                    }
                                    title={list.createdBy.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {list.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {list.resources.length === 1 ? `${list.resources.length} resource` : `${list.resources.length} resources`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}

                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
