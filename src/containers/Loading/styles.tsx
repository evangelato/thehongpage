import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        left: '50%',
        top: '45%',
        webkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
    },
}));

export default useStyles;
