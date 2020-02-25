import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { makeStyles } from '@material-ui/core/styles';
import 'react-vertical-timeline-component/style.min.css';
import Container from '@material-ui/core/Container';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        textAlign: 'center',
    },
}));

const WorkExperience: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="xs">
                <div className={classes.title}>
                    <h1>Work Experiences</h1>
                </div>
            </Container>
            <Container>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Republic of Korea, Cyber Operations Command</h3>
                        <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet purus ut lectus
                            tincidunt imperdiet. Nulla sed velit quis purus vulputate bibendum. Duis ut est at nibh
                            mollis egestas. Sed egestas leo ut nulla varius, id efficitur dui commodo.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">E4Net</h3>
                        <h4 className="vertical-timeline-element-subtitle">Software Develper</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet purus ut lectus
                            tincidunt imperdiet. Nulla sed velit quis purus vulputate bibendum. Duis ut est at nibh
                            mollis egestas. Sed egestas leo ut nulla varius, id efficitur dui commodo.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </React.Fragment>
    );
};

export default WorkExperience;
