import React, { useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getEducation } from '../../actions/educationActions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';

const Education: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEducation());
    }, [dispatch]);
    const data = useSelector((state: any) => state.Education.data);
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
                    <Grow in timeout={1000}>
                        <Paper
                            className={classes.mainFeaturedPost}
                            style={{
                                backgroundImage: `url(${
                                    data.header && data.header.imageUrl ? data.header.imageUrl : ''
                                })`,
                            }}
                        >
                            <div className={classes.overlay} />
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            {data.header && data.header.title ? data.header.title : ''}
                                        </Typography>
                                        <Typography variant="h5" color="inherit" paragraph>
                                            {data.header && data.header.subtitle1 ? data.header.subtitle1 : ''}
                                        </Typography>
                                        <Typography variant="h6" color="inherit" paragraph>
                                            {data.header && data.header.subtitle2 ? data.header.subtitle2 : ''}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grow>
                    <Grid container spacing={4}>
                        <Grow in timeout={2000}>
                            <Grid item xs={12} md={6}>
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {data.academics && data.academics.title ? data.academics.title : ''}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {data.academics && data.academics.content ? data.academics.content : ''}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={
                                                data.academics && data.academics.imageUrl ? data.academics.imageUrl : ''
                                            }
                                            title="Image Text"
                                        />
                                    </Hidden>
                                </Card>
                            </Grid>
                        </Grow>
                        <Grow in timeout={3000}>
                            <Grid item xs={12} md={6}>
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {data.extracurricular && data.extracurricular.title
                                                    ? data.extracurricular.title
                                                    : ''}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {data.extracurricular && data.extracurricular.content
                                                    ? data.extracurricular.content
                                                    : ''}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={
                                                data.extracurricular && data.extracurricular.imageUrl
                                                    ? data.extracurricular.imageUrl
                                                    : ''
                                            }
                                            title="Image Text"
                                        />
                                    </Hidden>
                                </Card>
                            </Grid>
                        </Grow>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Education;
