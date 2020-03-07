import React from 'react';
import useStyles from './styles';
import { NavLink, useLocation } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebarActions';
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
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state: any) => state.Sidebar.isSidebarOpen);
    const { pathname } = useLocation();
    const classes = useStyles();

    return (
        <Drawer open={isSidebarOpen} onClose={() => dispatch(closeSidebar())}>
            <div className="list" role="presentation">
                <List className={classes.sidebar}>
                    <ListItem
                        button
                        key="Home"
                        component={NavLink}
                        to="/"
                        selected={pathname === '/'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        key="AboutMe"
                        component={NavLink}
                        to="/about_me"
                        selected={pathname === '/about_me'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText>About Me</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        key="WorkExperience"
                        component={NavLink}
                        to="/work_experience"
                        selected={pathname === '/work_experience'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText>Work Experience</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        key="Education"
                        component={NavLink}
                        to="/education"
                        selected={pathname === '/education'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText>Education</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        key="PersonalProjects"
                        component={NavLink}
                        to="/personal_projects"
                        selected={pathname === '/personal_projects'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText>Personal Projects</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        key="Skills"
                        component={NavLink}
                        to="/skills"
                        selected={pathname === '/skills'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText>Skills</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        key="Hobbies"
                        component={NavLink}
                        to="/hobbies"
                        selected={pathname === '/hobbies'}
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <ListItemIcon>
                            <PaletteIcon />
                        </ListItemIcon>
                        <ListItemText>Hobbies & Interests</ListItemText>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
