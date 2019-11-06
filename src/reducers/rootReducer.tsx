import { combineReducers } from 'redux';
import appReducer from './sidebarReducer';

const rootReducer = combineReducers({
    appReducer
});

export default rootReducer;