import React from 'react';
import './Sidebar.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

interface Props {
    isSidebarOpen: boolean
}

class Sidebar extends React.Component<Props> {
    state = {}

    render() {
        return (
            <Drawer open={this.props.isSidebarOpen}>
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
}

export default Sidebar;