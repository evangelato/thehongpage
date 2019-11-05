import React, {useState} from 'react';
import Sidebar from './container/Sidebar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
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

  const [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon onClick={() => toggleSidebar(!isSidebarOpen)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            The Hongpage
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default App;
