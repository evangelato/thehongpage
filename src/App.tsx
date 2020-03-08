import React, { useCallback } from 'react';
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
import { openSidebar } from './actions/sidebarActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToTop from './scrollToTop';
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
            toolbar: theme.mixins.toolbar,
            content: {
                minHeight: '100vh',
                overflow: 'hidden',
                display: 'block',
                position: 'relative',
                paddingBottom: '149px',
            },
        }),
    );
    const classes = useStyles();

    const dispatch = useDispatch();
    const toggleSidebar = useCallback(() => {
        dispatch(openSidebar());
    }, [dispatch]);

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
            <div className={classes.content}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <AppBar position="fixed">
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    aria-label="menu"
                                    onClick={toggleSidebar}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    The Hongpage
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <div className={classes.toolbar} />
                        <Sidebar />
                        <ScrollToTop>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about_me" component={AboutMePage} />
                                <Route path="/work_experience" component={WorkExperiencePage} />
                                <Route path="/education" exact component={EducationPage} />
                                <Route path="/personal_projects" exact component={PersonalProjectsPage} />
                                <Route path="/skills" exact component={SkillsPage} />
                                <Route path="/hobbies" exact component={HobbiesPage} />
                            </Switch>
                        </ScrollToTop>
                        <Footer />
                    </Router>
                </MuiThemeProvider>
            </div>
        </React.Fragment>
    );
};

export default App;
