import { combineReducers } from 'redux';
import Sidebar from './sidebarReducer';
import AboutMe from './aboutMeReducer';

const rootReducer = combineReducers({
    Sidebar,
    AboutMe,
});

export default rootReducer;
