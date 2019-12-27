import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import ProfilePicture from '../../images/mii.png';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: theme.palette.background.paper,
    },
    profileSize: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
}));

const AboutMe: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="sm">
                    <div>
                        <h1>About Me</h1>
                    </div>
                    <div>
                        <Avatar alt="Evan Hong" src={ProfilePicture} className={classes.profileSize} />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit amet justo. Eu ultrices
                            vitae auctor eu augue ut lectus arcu bibendum. Arcu bibendum at varius vel pharetra vel.
                            Elementum sagittis vitae et leo duis ut diam. Risus feugiat in ante metus dictum at tempor
                            commodo. Aliquet risus feugiat in ante. Aliquet lectus proin nibh nisl. Sem nulla pharetra
                            diam sit amet nisl suscipit adipiscing bibendum. Egestas pretium aenean pharetra magna.
                        </p>
                        <p>
                            Ac turpis egestas integer eget. Ipsum faucibus vitae aliquet nec. Magna fringilla urna
                            porttitor rhoncus. Pellentesque eu tincidunt tortor aliquam nulla. Id leo in vitae turpis
                            massa sed elementum. Turpis massa tincidunt dui ut ornare lectus sit. Tristique senectus et
                            netus et malesuada fames ac. Morbi tristique senectus et netus. Elementum integer enim neque
                            volutpat ac tincidunt vitae semper. Adipiscing commodo elit at imperdiet dui. Commodo odio
                            aenean sed adipiscing diam donec adipiscing tristique.
                        </p>
                        <p>
                            Vulputate eu scelerisque felis imperdiet proin fermentum. In mollis nunc sed id semper risus
                            in hendrerit gravida. Lectus quam id leo in vitae. In arcu cursus euismod quis viverra nibh
                            cras pulvinar mattis. Lectus arcu bibendum at varius. Urna neque viverra justo nec ultrices
                            dui. Amet justo donec enim diam vulputate. Sit amet nulla facilisi morbi tempus iaculis.
                            Cras semper auctor neque vitae tempus quam. Egestas sed sed risus pretium quam vulputate
                            dignissim suspendisse. Sit amet consectetur adipiscing elit pellentesque habitant morbi
                            tristique senectus. Amet nisl purus in mollis nunc sed id semper risus. Sit amet facilisis
                            magna etiam tempor orci eu lobortis elementum. Sit amet purus gravida quis blandit turpis
                            cursus. Viverra ipsum nunc aliquet bibendum enim facilisis. Ultricies tristique nulla
                            aliquet enim tortor at.
                        </p>
                    </div>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default AboutMe;
