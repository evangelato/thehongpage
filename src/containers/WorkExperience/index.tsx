import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkExperience } from '../../actions/workExperienceActions';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from '@material-ui/core/Container';
import WorkIcon from '@material-ui/icons/Work';
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
            <Container>
                <VerticalTimeline>
                    {_.map(data, function(value) {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={value.duration ? value.duration : ''}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                                key={value._id ? value._id : ''}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {value.companyName ? value.companyName : ''}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    {value.jobTitle ? value.jobTitle : ''}
                                </h4>
                                <p>{value.description ? value.description : ''}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </Container>
        </Loading>
    );
};

export default WorkExperience;
