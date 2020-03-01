import { OPEN_SIDEBAR, CLOSE_SIDEBAR, SidebarActionTypes } from '../actions/sidebarActions';

interface SidebarState {
    isSidebarOpen: boolean;
}

const initialState = {
    isSidebarOpen: false,
};

const sidebarReducer = (state = initialState, action: SidebarActionTypes): SidebarState => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return Object.assign({}, state, {
                isSidebarOpen: true,
            });
        case CLOSE_SIDEBAR:
            return Object.assign({}, state, {
                isSidebarOpen: false,
            });
        default:
            return state;
    }
};

export default sidebarReducer;
