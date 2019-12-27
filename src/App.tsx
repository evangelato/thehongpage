import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from './containers/Sidebar';
import Home from './containers/Home';
import AboutMePage from './containers/AboutMe';
import WorkExperiencePage from './containers/WorkExperience';
import EducationPage from './containers/Education';
import PersonalProjectsPage from './containers/PersonalProjects';
import SkillsPage from './containers/Skills';
import HobbiesPage from './containers/Hobbies';
import Footer from './containers/Footer';
import { openSidebar } from './actions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

const App: React.FC = () => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
        }),
    );
    const classes = useStyles();

    // const [isSidebarOpen, toggleSidebar] = useState(false);

    const dispatch = useDispatch();

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#0092CC',
            },
            secondary: {
                main: '#FF3333',
            },
            type: 'dark',
        },
    });

    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                                <MenuIcon onClick={() => dispatch(openSidebar())} />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                The Hongpage
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about_me" component={AboutMePage} />
                        <Route path="/work_experience" component={WorkExperiencePage} />
                        <Route path="/education" exact component={EducationPage} />
                        <Route path="/personal_projects" exact component={PersonalProjectsPage} />
                        <Route path="/skills" exact component={SkillsPage} />
                        <Route path="/hobbies" exact component={HobbiesPage} />
                    </Switch>
                    <Footer />
                </Router>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
