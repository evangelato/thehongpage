import { combineReducers } from 'redux';
import Sidebar from './sidebarReducer';
import AboutMe from './aboutMeReducer';
import WorkExperience from './workExperienceReducer';

const rootReducer = combineReducers({
    Sidebar,
    AboutMe,
    WorkExperience,
});

export default rootReducer;
