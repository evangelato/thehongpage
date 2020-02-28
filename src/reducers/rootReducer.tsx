import { combineReducers } from 'redux';
import Sidebar from './sidebarReducer';
import AboutMe from './aboutMeReducer';
import WorkExperience from './workExperienceReducer';
import Project from './projectReducer';

const rootReducer = combineReducers({
    Sidebar,
    AboutMe,
    WorkExperience,
    Project,
});

export default rootReducer;
