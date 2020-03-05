import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
    },
    content: {
        flexGrow: 1,
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
    cardRow: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

const Skills: React.FC = () => {
    const classes = useStyles();

    const LanguageRow: React.FC = () => {
        return (
            <React.Fragment>
                <Grid container md={6} xs={12} sm={12} spacing={3} className={classes.cardRow}>
                    <Grid item md={12} xs={12} sm={12}>
                        <Typography variant="h4" className={classes.title}>
                            Languages
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://i.imgur.com/kgsYB0hm.jpg'}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Test
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://i.imgur.com/kgsYB0hm.jpg'}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Test
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };

    const ToolRow: React.FC = () => {
        return (
            <React.Fragment>
                <Grid container md={6} xs={12} sm={12} spacing={3} className={classes.cardRow}>
                    <Grid item md={12} xs={12} sm={12}>
                        <Typography variant="h4" className={classes.title}>
                            Tools
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://i.imgur.com/ILjoiilm.jpg'}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Unity
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://i.imgur.com/Yah6sKXm.png'}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Visual Studio Code
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xs">
                    <div className={classes.title}>
                        <h1>Skills</h1>
                    </div>
                </Container>
                <Container className={classes.content} maxWidth="lg">
                    <Grid container spacing={3}>
                        <LanguageRow />
                        <ToolRow />
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default Skills;
