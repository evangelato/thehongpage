import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
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
            <div className="list" role="presentation">
                <List>
                    <ListItem button key="Home" component={NavLink} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button key="Resume" component={NavLink} to="/resume">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText>Resume</ListItemText>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
