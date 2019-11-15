import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from './containers/Sidebar';
import Home from './containers/Home';
import Resume from './containers/Resume';
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
            type: 'dark',
        },
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
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
                        <Route path="/resume" component={Resume} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
