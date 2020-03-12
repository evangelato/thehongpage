import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkExperience } from '../../actions/workExperienceActions';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';
import Loading from '../Loading';
import useStyles from './styles';

const WorkExperience: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWorkExperience());
    }, [dispatch]);
    const data = useSelector((state: any) => state.WorkExperience.data);
    const classes = useStyles();
    return (
        <Loading>
            <Container maxWidth="xs">
                <div className={classes.title}>
                    <h1>Work Experiences</h1>
                </div>
            </Container>
            <Container className={classes.timeline}>
                <VerticalTimeline>
                    {_.map(data, function(value) {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(0,146,204)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0,146,204)' }}
                                date={value.duration ? value.duration : ''}
                                iconStyle={{ background: 'rgb(0,146,204)', color: '#fff' }}
                                icon={<WorkIcon />}
                                key={value._id ? value._id : ''}
                            >
                                <Typography variant="h5" className="vertical-timeline-element-title">
                                    {value.companyName ? value.companyName : ''}
                                </Typography>

                                <Typography variant="h6" className="vertical-timeline-element-subtitle">
                                    {value.jobTitle ? value.jobTitle : ''}
                                </Typography>
                                {value.description.length > 0 ? (
                                    <ul>
                                        {_.map(value.description, function(description, index) {
                                            return <li key={index}>{description}</li>;
                                        })}
                                    </ul>
                                ) : (
                                    <React.Fragment />
                                )}

                                {value.externalUrls.length > 0 ? (
                                    <div className={classes.button}>
                                        {_.map(value.externalUrls, function(externalUrl) {
                                            return (
                                                <Button
                                                    size="small"
                                                    href={externalUrl.url}
                                                    target="_blank"
                                                    variant="outlined"
                                                    rel="noopener noreferrer"
                                                    key={externalUrl.url}
                                                >
                                                    {externalUrl.description}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <React.Fragment />
                                )}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </Container>
        </Loading>
    );
};

export default WorkExperience;
