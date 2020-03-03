import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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

const Hobbies: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xs">
                    <div className={classes.title}>
                        <h1>Hobbies and Interests</h1>
                    </div>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/LSmY6r6m.jpg"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Reading
                                    </Typography>
                                    <Typography>Reads Fantasy and Science Fiction</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/XWxS6YCm.jpg"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Playing Video Games
                                    </Typography>
                                    <Typography>Plays Nintendo Switch</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/NBvT2V5m.jpg"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Writing Stories
                                    </Typography>
                                    <Typography>Writes science fiction and fantasy</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/ovW7Hdvm.jpg"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Skiing
                                    </Typography>
                                    <Typography>Goes Skiing every winter without fail</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://i.imgur.com/nRahfAP.jpg"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Watching Movies
                                    </Typography>
                                    <Typography>Loves movies be it cinema or at home</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default Hobbies;
