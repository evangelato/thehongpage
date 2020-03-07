import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHobby } from '../../actions/hobbyActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import Grow from '@material-ui/core/Grow';
import Loading from '../Loading';
import useStyles from './styles';

const Hobbies: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHobby());
    }, [dispatch]);
    const data = useSelector((state: any) => state.Hobby.data);
    const classes = useStyles();

    return (
        <Loading>
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
                        {data && data.length > 0 ? (
                            _.map(data, function(hobbyData) {
                                return (
                                    <Grow in timeout={1000}>
                                        <Grid item xs={12} sm={6} md={4} key={hobbyData.order}>
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={hobbyData.imageUrl ? hobbyData.imageUrl : ''}
                                                    title="Image title"
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {hobbyData.title ? hobbyData.title : ''}
                                                    </Typography>
                                                    <Typography>
                                                        {hobbyData.description ? hobbyData.description : ''}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grow>
                                );
                            })
                        ) : (
                            <React.Fragment />
                        )}
                    </Grid>
                </Container>
            </main>
        </Loading>
    );
};

export default Hobbies;
