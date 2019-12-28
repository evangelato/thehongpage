import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const PersonalProjects: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require('../../images/react-logo.png')}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Hongpage Frontend
                                </Typography>
                                <Typography>
                                    My personal resume site that you are currently browsing! Created with React.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                <Button
                                    size="small"
                                    color="primary"
                                    href="https://github.com/evangelato/thehongpage_frontend"
                                    target="_blank"
                                >
                                    View Source Code
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require('../../images/gms2_logo.png')}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    A Butterful Adventure
                                </Typography>
                                <Typography>
                                    A platforming game about a Butter melting its way to the five star rotating
                                    restaurant.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                <Button
                                    size="small"
                                    color="primary"
                                    href="https://github.com/evangelato/AButterfulAdventure"
                                    target="_blank"
                                >
                                    View Source Code
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require('../../images/nodejs_logo.jpg')}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Hongpage Backend
                                </Typography>
                                <Typography>
                                    The backend for the Hongpage. Created using NodeJs and ExpressJS.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                <Button
                                    size="small"
                                    color="primary"
                                    href="https://github.com/evangelato/thehongpage_backend"
                                    target="_blank"
                                >
                                    View Source Code
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default PersonalProjects;
