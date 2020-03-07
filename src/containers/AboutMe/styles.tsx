import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: theme.palette.background.paper,
    },
    mainContent: {
        paddingBottom: theme.spacing(8),
    },
    title: {
        textAlign: 'center',
    },
    profileSize: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    avatarGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
}));

export default useStyles;
