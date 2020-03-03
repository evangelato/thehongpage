import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHobby());
    }, [dispatch]);
    const data = useSelector((state: any) => state.Hobby.data);
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
                        {data && data.length > 0 ? (
                            _.map(data, function(hobbyData) {
                                return (
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
                                );
                            })
                        ) : (
                            <React.Fragment />
                        )}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default Hobbies;
