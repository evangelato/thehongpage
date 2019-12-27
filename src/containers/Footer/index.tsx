import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        position: 'absolute',
        bottom: '0',
        width: '100%',
    },
}));

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    <GitHubIcon /> <LinkedInIcon />
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        The Hongpage
                    </Link>{' '}
                    2019
                    {'.'}
                </Typography>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
