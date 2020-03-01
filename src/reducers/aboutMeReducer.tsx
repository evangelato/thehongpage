import {
    GET_ABOUT_ME_REQUEST,
    GET_ABOUT_ME_SUCCESS,
    GET_ABOUT_ME_FAILURE,
    AboutMeActionTypes,
} from '../actions/aboutMeActions';

interface AboutMeState {
    content: string;
}

const initialState = {
    content: '',
};

const aboutMeReducer = (state = initialState, action: AboutMeActionTypes): AboutMeState => {
    switch (action.type) {
        case GET_ABOUT_ME_REQUEST:
            return Object.assign({}, state, {
                content: '',
            });
        case GET_ABOUT_ME_SUCCESS:
            return Object.assign({}, state, {
                content: action.response[0].content,
            });
        case GET_ABOUT_ME_FAILURE:
            return Object.assign({}, state, {
                content: '',
            });
        default:
            return state;
    }
};

export default aboutMeReducer;
