import React, { useEffect, ReactElement } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingState, getErrorState } from '../../actions/loadingActions';
import useStyles from './styles';

const Alert = (props: AlertProps): ReactElement => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Loading: React.FC = (props: any): any => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLoadingState());
        dispatch(getErrorState());
    });
    const isLoading = useSelector((state: any) => state.Loading.loading);
    const hasError = useSelector((state: any) => state.Loading.error);
    const classes = useStyles();
    if (isLoading) {
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <CircularProgress size={70} />
                </div>
            </React.Fragment>
        );
    } else if (hasError) {
        return (
            <React.Fragment>
                <Snackbar open={hasError} autoHideDuration={6000}>
                    <Alert severity="error">There was a problem connecting to the server.</Alert>
                </Snackbar>
            </React.Fragment>
        );
    } else {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
};

export default Loading;
