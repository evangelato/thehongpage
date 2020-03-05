import {
    GET_EDUCATION_REQUEST,
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAILURE,
    EducationActionTypes,
} from '../actions/educationActions';

interface EducationState {
    data: any;
}

const initialState = {
    data: {
        header: '',
        academics: '',
        extracurricular: '',
    },
};

const educationReducer = (state = initialState, action: EducationActionTypes): EducationState => {
    switch (action.type) {
        case GET_EDUCATION_REQUEST:
            return Object.assign({}, state, {
                data: '',
            });
        case GET_EDUCATION_SUCCESS:
            return Object.assign({}, state, {
                data: action.response[0],
            });
        case GET_EDUCATION_FAILURE:
            return Object.assign({}, state, {
                data: '',
            });
        default:
            return state;
    }
};

export default educationReducer;
