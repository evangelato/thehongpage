import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Chip from '@material-ui/core/Chip';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getProject } from '../../actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import _ from 'lodash';
import useStyles from './styles';

const PersonalProjects: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProject());
    }, [dispatch]);
    const data = useSelector((state: any) => state.Project.data);
    const classes = useStyles();

    return (
        <Loading>
            <CssBaseline />
            <Container maxWidth="xs">
                <div className={classes.title}>
                    <h1>Personal Projects</h1>
                </div>
            </Container>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {data && data.length > 0 ? (
                        _.map(data, function(projectData, index) {
                            return (
                                <Grow in timeout={1000} key={index}>
                                    <Grid item xs={12} sm={6} md={6} key={projectData.order}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={projectData.imageUrl ? projectData.imageUrl : ''}
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {projectData.title ? projectData.title : ''}
                                                </Typography>
                                                <Typography>
                                                    {projectData.description ? projectData.description : ''}
                                                </Typography>
                                                {projectData.tags.length > 0 ? (
                                                    <div className={classes.chip}>
                                                        {_.map(projectData.tags, function(value) {
                                                            return <Chip label={value} color="primary" key={value} />;
                                                        })}
                                                    </div>
                                                ) : (
                                                    <React.Fragment />
                                                )}
                                            </CardContent>

                                            <CardActions>
                                                {projectData.externalUrls.length > 0 ? (
                                                    _.map(projectData.externalUrls, function(value) {
                                                        return (
                                                            <Button
                                                                size="small"
                                                                color="primary"
                                                                href={value.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                key={value.sitename}
                                                            >
                                                                View on {value.sitename}
                                                            </Button>
                                                        );
                                                    })
                                                ) : (
                                                    <React.Fragment />
                                                )}
                                            </CardActions>
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
        </Loading>
    );
};

export default PersonalProjects;
