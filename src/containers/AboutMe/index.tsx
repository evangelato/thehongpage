import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutMe } from '../../actions/aboutMeActions';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import ProfilePicture from '../../images/mii.png';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        textAlign: 'center',
    },
    profileSize: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    avatarGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
}));

const AboutMe: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAboutMe());
    }, [dispatch]);
    const content = useSelector((state: any) => state.AboutMe.content);
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Paper elevation={3}>
                    <Container maxWidth="xs">
                        <div className={classes.title}>
                            <h1>About Me</h1>
                        </div>
                    </Container>
                    <Fade in={true} timeout={1000}>
                        <Container maxWidth="md">
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4} alignContent="center">
                                    <div className={classes.avatarGrid}>
                                        <Avatar alt="Evan Hong" src={ProfilePicture} className={classes.profileSize} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box color="text.primary">{content ? content : ''}</Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Fade>
                </Paper>
            </main>
        </React.Fragment>
    );
};

export default AboutMe;
