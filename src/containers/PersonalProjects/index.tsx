import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
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
    chip: {
        paddingTop: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const PersonalProjects: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xs">
                    <div className={classes.title}>
                        <h1>Personal Projects</h1>
                    </div>
                </Container>
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
                                    <div className={classes.chip}>
                                        {' '}
                                        <Chip label="React" color="primary" />
                                        <Chip label="Redux" color="primary" />
                                        <Chip label="Typescript" color="primary" />
                                    </div>
                                </CardContent>

                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href="https://github.com/evangelato/thehongpage_frontend"
                                        target="_blank"
                                    >
                                        View on GitHub
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
                                    <div className={classes.chip}>
                                        {' '}
                                        <Chip label="GameMaker Studio 2" color="primary" />
                                        <Chip label="Aseprite" color="primary" />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href="https://github.com/evangelato/AButterfulAdventure"
                                        target="_blank"
                                    >
                                        View on GitHub
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
                                    <div className={classes.chip}>
                                        {' '}
                                        <Chip label="ExpressJS" color="primary" />
                                        <Chip label="MongoDB" color="primary" />
                                        <Chip label="Typescript" color="primary" />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href="https://github.com/evangelato/thehongpage_backend"
                                        target="_blank"
                                    >
                                        View on GitHUb
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default PersonalProjects;
