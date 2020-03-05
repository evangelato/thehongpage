import { combineReducers } from 'redux';
import Sidebar from './sidebarReducer';
import AboutMe from './aboutMeReducer';
import WorkExperience from './workExperienceReducer';
import Education from './educationReducer';
import Project from './projectReducer';
import Hobby from './hobbyReducer';
import Loading from './loadingReducer';

const rootReducer = combineReducers({
    Sidebar,
    AboutMe,
    WorkExperience,
    Education,
    Project,
    Hobby,
    Loading,
});

export default rootReducer;
