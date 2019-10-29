import React from 'react';
import Sidebar from './container/Sidebar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

const App: React.FC = () => {
  const [state, setState] = React.useState({
    isSidebarOpen: false
  });

  const toggleSidebar = () => {
    setState({ ...state, isSidebarOpen: true });
  }
  return (
    <div>
        <Button onClick={toggleSidebar}> 
          <MenuIcon /> 
        </Button>
        <Sidebar isSidebarOpen={state.isSidebarOpen} />
    </div>
  );
}

export default App;
