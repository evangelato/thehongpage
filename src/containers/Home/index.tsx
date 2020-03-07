import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import useStyles from './styles';

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
                <CssBaseline />
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Fade in timeout={1000}>
                            <div>
                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Welcome to the Hongpage
                                </Typography>
                                <Typography variant="h5" align="center" color="textPrimary" paragraph>
                                    My name is Sung Woo Hong, but you can call me Evan. I like playing games and
                                    browsing the web. So naturally, I make games and websites.
                                </Typography>
                            </div>
                        </Fade>
                        <Fade in timeout={2000}>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Download Resume
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Contact Me
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <Grow in timeout={1000}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={'https://i.imgur.com/HKSKZtZ.png'}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Work Experience
                                        </Typography>
                                        <Typography>
                                            View the various work experiences in game and web development.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" component={NavLink} to="work_experience">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grow>
                        <Grow in timeout={2000}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={'https://i.imgur.com/bOoA2zD.png'}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Education
                                        </Typography>
                                        <Typography>View my educational background and achievements.</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" component={NavLink} to="/education">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grow>
                        <Grow in timeout={3000}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={'https://i.imgur.com/XbTl3Dv.png'}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Personal Projects
                                        </Typography>
                                        <Typography>View my passion projects and creative endeavour.</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" component={NavLink} to="personal_projects">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grow>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default Home;
