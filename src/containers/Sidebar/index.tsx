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
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import PaletteIcon from '@material-ui/icons/Palette';

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
                    <ListItem button key="AboutMe" component={NavLink} to="/about_me">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText>About Me</ListItemText>
                    </ListItem>
                    <ListItem button key="WorkExperience" component={NavLink} to="/work_experience">
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText>Work Experience</ListItemText>
                    </ListItem>
                    <ListItem button key="Education" component={NavLink} to="/education">
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText>Education</ListItemText>
                    </ListItem>
                    <ListItem button key="PersonalProjects" component={NavLink} to="/personal_projects">
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText>Personal Projects</ListItemText>
                    </ListItem>
                    <ListItem button key="Skills" component={NavLink} to="/skills">
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText>Skills</ListItemText>
                    </ListItem>
                    <ListItem button key="Hobbies" component={NavLink} to="/hobbies">
                        <ListItemIcon>
                            <PaletteIcon />
                        </ListItemIcon>
                        <ListItemText>Hobbies</ListItemText>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
