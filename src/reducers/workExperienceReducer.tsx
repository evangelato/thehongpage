import {
    GET_WORK_EXPERIENCE_REQUEST,
    GET_WORK_EXPERIENCE_SUCCESS,
    GET_WORK_EXPERIENCE_FAILURE,
    WorkExperienceActionTypes,
} from '../actions/workExperienceActions';

interface WorkExperienceState {
    data: any;
}

const initialState = {
    data: '',
};

const workExperienceReducer = (state = initialState, action: WorkExperienceActionTypes): WorkExperienceState => {
    switch (action.type) {
        case GET_WORK_EXPERIENCE_REQUEST:
            return Object.assign({}, state, {
                data: '',
            });
        case GET_WORK_EXPERIENCE_SUCCESS:
            return Object.assign({}, state, {
                data: action.response,
            });
        case GET_WORK_EXPERIENCE_FAILURE:
            return Object.assign({}, state, {
                data: '',
            });
        default:
            return state;
    }
};

export default workExperienceReducer;
