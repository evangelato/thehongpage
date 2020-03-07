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
    avatarGrid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profile: {
        width: '90%',
        height: '90%',
    },
}));

export default useStyles;
