import {
    GET_WORK_EXPERIENCE,
    GET_WORK_EXPERIENCE_SUCCESS,
    GET_WORK_EXPERIENCE_FAIL,
    WorkExperienceActionTypes,
} from '../actions/workExperienceActions';

interface WorkExperienceState {
    loading: boolean;
    error: boolean;
    data: any;
}

const initialState = {
    loading: false,
    error: false,
    data: '',
};

function workExperienceReducer(state = initialState, action: WorkExperienceActionTypes): WorkExperienceState {
    switch (action.type) {
        case GET_WORK_EXPERIENCE:
            return Object.assign({}, state, {
                loading: true,
            });
        case GET_WORK_EXPERIENCE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response,
            });
        case GET_WORK_EXPERIENCE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        default:
            return state;
    }
}

export default workExperienceReducer;
