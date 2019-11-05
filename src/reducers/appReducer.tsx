import { TOGGLE_SIDEBAR, AppActionTypes } from '../actions/appActions';

const initialState = {
    isSidebarOpen: false
}

function appReducer(state = initialState, action: AppActionTypes ) {
    switch(action.type) {
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                isSidebarOpen: !action.isSidebarOpen
            })
        default:
            return state
    }
}

export default appReducer;