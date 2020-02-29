import { GET_ABOUT_ME, GET_ABOUT_ME_SUCCESS, GET_ABOUT_ME_FAIL, AboutMeActionTypes } from '../actions/aboutMeActions';

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
        case GET_ABOUT_ME:
            return Object.assign({}, state, {
                loading: true,
            });
        case GET_ABOUT_ME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                content: action.response[0].content,
            });
        case GET_ABOUT_ME_FAIL:
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        default:
            return state;
    }
}

export default aboutMeReducer;
