import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutMe } from '../../actions/aboutMeActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Loading from '../Loading';
import _ from 'lodash';
import useStyles from './styles';

const AboutMe: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAboutMe());
    }, [dispatch]);
    const data = useSelector((state: any) => state.AboutMe.data);
    const classes = useStyles();
    return (
        <Loading>
            <CssBaseline />
            <Container maxWidth="xs">
                <div className={classes.title}>
                    <h1>About Me</h1>
                </div>
            </Container>
            <Container maxWidth="lg" className={classes.main}>
                <Paper elevation={3} className={classes.mainContent}>
                    <Fade in timeout={1000}>
                        <Container maxWidth="md">
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4}>
                                    <div className={classes.avatarGrid}>
                                        <Avatar
                                            alt="Evan Hong"
                                            src={data.imageUrl ? data.imageUrl : ''}
                                            className={classes.profile}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box color="text.primary">
                                        {data.content && data.content.length > 0 ? (
                                            _.map(data.content, function(paragraph, index) {
                                                return <p key={index}>{paragraph}</p>;
                                            })
                                        ) : (
                                            <React.Fragment />
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Fade>
                </Paper>
            </Container>
        </Loading>
    );
};

export default AboutMe;
