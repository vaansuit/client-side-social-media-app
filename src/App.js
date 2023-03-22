import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import imageSocial from './assets/image1.jpg'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

const App = () => {
    return (
       <Container maxWidth='lg'>
            <AppBar position="static" color="inheridt">
                <Typography variant="h2" align="center">Dead Poets Society</Typography>
                <img src={imageSocial} alt='imageSocial' heigth="10"/>
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