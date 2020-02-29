import {
    GET_ABOUT_ME_REQUEST,
    GET_ABOUT_ME_SUCCESS,
    GET_ABOUT_ME_FAILURE,
    AboutMeActionTypes,
} from '../actions/aboutMeActions';

interface AboutMeState {
    loading: boolean;
    error: boolean;
    content: string;
}

const initialState = {
    loading: false,
    error: false,
    content: '',
};

function aboutMeReducer(state = initialState, action: AboutMeActionTypes): AboutMeState {
    switch (action.type) {
        case GET_ABOUT_ME_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case GET_ABOUT_ME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                content: action.response[0].content,
            });
        case GET_ABOUT_ME_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        default:
            return state;
    }
}

export default aboutMeReducer;
