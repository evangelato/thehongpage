import {
    GET_ABOUT_ME_REQUEST,
    GET_ABOUT_ME_SUCCESS,
    GET_ABOUT_ME_FAILURE,
    AboutMeActionTypes,
} from '../actions/aboutMeActions';

interface AboutMeState {
    data: any;
}

const initialState = {
    data: '',
};

const aboutMeReducer = (state = initialState, action: AboutMeActionTypes): AboutMeState => {
    switch (action.type) {
        case GET_ABOUT_ME_REQUEST:
            return Object.assign({}, state, {
                data: '',
            });
        case GET_ABOUT_ME_SUCCESS:
            return Object.assign({}, state, {
                data: action.response[0],
            });
        case GET_ABOUT_ME_FAILURE:
            return Object.assign({}, state, {
                data: '',
            });
        default:
            return state;
    }
};

export default aboutMeReducer;
