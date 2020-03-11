import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
    },
    timeline: {
        paddingBottom: theme.spacing(4),
    },
    content: {
        passingBottom: theme.spacing(2),
    },
    button: {
        paddingTop: theme.spacing(2),
    },
}));

export default useStyles;
