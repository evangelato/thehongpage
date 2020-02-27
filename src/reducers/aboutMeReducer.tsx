import { GET_ABOUT_ME, GOT_ABOUT_ME, AboutMeActionTypes } from '../actions/aboutMeActions';

interface AboutMeState {
    loading: boolean;
    content: string;
}

const initialState = {
    loading: true,
    content: '',
};

function aboutMeReducer(state = initialState, action: AboutMeActionTypes): AboutMeState {
    switch (action.type) {
        case GET_ABOUT_ME:
            return Object.assign({}, state, {
                loading: true,
            });
        case GOT_ABOUT_ME:
            return Object.assign({}, state, {
                loading: false,
                content: action.response[0].content,
            });
        default:
            return state;
    }
}

export default aboutMeReducer;
