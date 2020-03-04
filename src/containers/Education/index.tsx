import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
    },
    main: {
        paddingBottom: theme.spacing(8),
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));

const Education: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.main}>
                <Container maxWidth="xs">
                    <div className={classes.title}>
                        <h1>Education</h1>
                    </div>
                </Container>
                <Container maxWidth="lg">
                    <Paper
                        className={classes.mainFeaturedPost}
                        style={{ backgroundImage: `url(https://i.imgur.com/AaOomZk.jpg)` }}
                    >
                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        University of California, San Diego
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Computer Science (Bachelor of Science)
                                    </Typography>
                                    <Typography variant="h6" color="inherit" paragraph>
                                        with a Minor in Business
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <CardActionArea component="a" href="#">
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                Academics
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non magna
                                                sed felis tincidunt feugiat. Sed tincidunt mauris at neque pretium
                                                consectetur. Aliquam luctus mauris ac commodo convallis. Maecenas
                                                laoreet purus nec lacus mollis, quis dapibus enim aliquet. Quisque
                                                rutrum, augue quis eleifend scelerisque, dolor metus tincidunt tortor, a
                                                tincidunt orci nisl eu est.
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://i.imgur.com/jWgtCzTm.jpg"
                                            title="Image Text"
                                        />
                                    </Hidden>
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardActionArea component="a" href="#">
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                Extracurricular Activities
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non magna
                                                sed felis tincidunt feugiat. Sed tincidunt mauris at neque pretium
                                                consectetur. Aliquam luctus mauris ac commodo convallis. Maecenas
                                                laoreet purus nec lacus mollis, quis dapibus enim aliquet. Quisque
                                                rutrum, augue quis eleifend scelerisque, dolor metus tincidunt tortor, a
                                                tincidunt orci nisl eu est.
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://i.imgur.com/vmy55VJm.jpg"
                                            title="Image Text"
                                        />
                                    </Hidden>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Education;
