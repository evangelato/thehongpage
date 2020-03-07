import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        textAlign: 'center',
    },
}));

export default useStyles;
