import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { closeSidebar } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const Sidebar: React.FC = () => {
    const isSidebarOpen = useSelector((state: any) => state.Sidebar.isSidebarOpen);
    const dispatch = useDispatch();

    return (
        <Drawer open={isSidebarOpen} onClose={() => dispatch(closeSidebar())}>
            <div className="list">
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <Link to="/" style={{ textDecoration: 'none' }} onClick={() => dispatch(closeSidebar())}>
                            <ListItemText>Home</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <Link to="/resume" style={{ textDecoration: 'none' }} onClick={() => dispatch(closeSidebar())}>
                            <ListItemText>Resume</ListItemText>
                        </Link>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
