import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ItchIcon from './itchIcon';

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    <a
                        href="https://github.com/evangelato"
                        className={classes.hyperlink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </a>{' '}
                    <a
                        href="https://evangelato.itch.io/"
                        className={classes.hyperlink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ItchIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/evan-hong-2643501a1/"
                        className={classes.hyperlink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        The Hongpage
                    </Link>{' '}
                    2020
                    {'.'}
                </Typography>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
