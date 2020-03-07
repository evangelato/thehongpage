import React, { useEffect } from 'react';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingState, getErrorState } from '../../actions/loadingActions';

const Loading = (): any => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLoadingState());
        dispatch(getErrorState());
    });
    const isLoading = useSelector((state: any) => state.Loading.loading);
    // const hasError = useSelector((state: any) => state.Loading.error);
    const classes = useStyles();
    if (isLoading) {
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <CircularProgress size={70} />
                </div>
            </React.Fragment>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
};

export default Loading;
