import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        left: '50%',
        top: '45%',
        webkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
    },
}));

const Loading: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <CircularProgress size={70} />
            </div>
        </React.Fragment>
    );
};

export default Loading;
