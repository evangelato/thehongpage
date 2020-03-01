import { combineReducers } from 'redux';
import Sidebar from './sidebarReducer';
import AboutMe from './aboutMeReducer';
import WorkExperience from './workExperienceReducer';
import Project from './projectReducer';
import Loading from './loadingReducer';

const rootReducer = combineReducers({
    Sidebar,
    AboutMe,
    WorkExperience,
    Project,
    Loading,
});

export default rootReducer;
