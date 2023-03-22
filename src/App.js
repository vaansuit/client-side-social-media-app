import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import imageSocial from './assets/image1.jpg'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles';
import getPosts from './actions/posts';
import { useDispatch } from 'react-redux';

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, []);

    return (
       <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inheridt">
                <Typography className={classes.heading} variant="h2" align="center">Dead Poets Society</Typography>
                <img className={classes.image} src={imageSocial} alt='imageSocial' height="80"/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid items xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid items xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
       </Container>
    );
}

export default App;