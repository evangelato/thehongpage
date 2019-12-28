import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
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
                    <Container maxWidth="md">
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={4} alignContent="center">
                                <div className={classes.avatarGrid}>
                                    <Avatar alt="Evan Hong" src={ProfilePicture} className={classes.profileSize} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box color="text.primary">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit
                                        amet justo. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Arcu
                                        bibendum at varius vel pharetra vel. Elementum sagittis vitae et leo duis ut
                                        diam. Risus feugiat in ante metus dictum at tempor commodo. Aliquet risus
                                        feugiat in ante. Aliquet lectus proin nibh nisl. Sem nulla pharetra diam sit
                                        amet nisl suscipit adipiscing bibendum. Egestas pretium aenean pharetra magna.
                                    </p>
                                    <p>
                                        Ac turpis egestas integer eget. Ipsum faucibus vitae aliquet nec. Magna
                                        fringilla urna porttitor rhoncus. Pellentesque eu tincidunt tortor aliquam
                                        nulla. Id leo in vitae turpis massa sed elementum. Turpis massa tincidunt dui ut
                                        ornare lectus sit. Tristique senectus et netus et malesuada fames ac. Morbi
                                        tristique senectus et netus. Elementum integer enim neque volutpat ac tincidunt
                                        vitae semper. Adipiscing commodo elit at imperdiet dui. Commodo odio aenean sed
                                        adipiscing diam donec adipiscing tristique.
                                    </p>
                                    <p>
                                        Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. In iaculis
                                        nunc sed augue lacus viverra vitae congue. Elit scelerisque mauris pellentesque
                                        pulvinar pellentesque habitant morbi tristique senectus. Arcu felis bibendum ut
                                        tristique et egestas quis. Laoreet id donec ultrices tincidunt arcu non sodales.
                                        Eget magna fermentum iaculis eu non diam phasellus vestibulum. Scelerisque in
                                        dictum non consectetur a erat nam. Tristique senectus et netus et malesuada
                                        fames. Nec nam aliquam sem et. Turpis massa sed elementum tempus egestas sed
                                        sed. Pharetra sit amet aliquam id diam maecenas. Volutpat sed cras ornare arcu
                                        dui vivamus arcu. Eget aliquet nibh praesent tristique magna. Tortor condimentum
                                        lacinia quis vel eros donec ac odio tempor.
                                    </p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </React.Fragment>
    );
};

export default AboutMe;
