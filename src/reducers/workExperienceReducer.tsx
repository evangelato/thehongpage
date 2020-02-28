import { GET_WORK_EXPERIENCE, GOT_WORK_EXPERIENCE, WorkExperienceActionTypes } from '../actions/workExperienceActions';

interface WorkExperienceState {
    loading: boolean;
    data: any;
}

const initialState = {
    loading: false,
    data: '',
};

function workExperienceReducer(state = initialState, action: WorkExperienceActionTypes): WorkExperienceState {
    switch (action.type) {
        case GET_WORK_EXPERIENCE:
            return Object.assign({}, state, {
                loading: true,
            });
        case GOT_WORK_EXPERIENCE:
            return Object.assign({}, state, {
                loading: false,
                data: action.response,
            });
        default:
            return state;
    }
}

export default workExperienceReducer;
