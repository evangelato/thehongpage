import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
    },
    timeline: {
        paddingBottom: theme.spacing(4),
    },
}));

export default useStyles;
