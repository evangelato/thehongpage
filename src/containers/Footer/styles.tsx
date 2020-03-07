import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        position: 'absolute',
        bottom: '0',
        width: '100%',
    },
    hyperlink: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

export default useStyles;
