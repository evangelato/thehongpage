import React from 'react';
import './Sidebar.css';
import { closeSidebar } from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const Sidebar: React.FC = () => {
    const isSidebarOpen = useSelector((state: any) => state.Sidebar.isSidebarOpen);
    const dispatch = useDispatch();

    return (
        <Drawer open={isSidebarOpen} onClose={() => dispatch(closeSidebar())}>
            <div className="list">
                <List>
                    <ListItem>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText>
                            Test
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );

}

export default Sidebar;