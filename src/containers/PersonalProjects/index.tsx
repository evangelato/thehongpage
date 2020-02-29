import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getProject } from '../../actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../Loading';
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

const PersonalProjects: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.Project.data);
    const isLoading = useSelector((state: any) => state.Project.loading);
    useEffect(() => {
        dispatch(getProject());
    }, [dispatch]);
    const classes = useStyles();
    return !isLoading ? (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xs">
                    <div className={classes.title}>
                        <h1>Personal Projects</h1>
                    </div>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {data || data.length > 0 ? (
                            _.map(data, function(projectData) {
                                return (
                                    <Grid item xs={12} sm={6} md={6} key={projectData.title}>
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
                                );
                            })
                        ) : (
                            <React.Fragment />
                        )}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    ) : (
        <LoadingPage />
    );
};

export default PersonalProjects;
