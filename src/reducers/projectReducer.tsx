import {
    GET_PROJECT_REQUEST,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAILURE,
    ProjectActionTypes,
} from '../actions/projectActions';

interface ProjectState {
    data: any;
}

const initialState = {
    data: [
        {
            title: '',
            description: '',
            imageUrl: '',
            tags: [],
            externalUrls: [],
            order: 0,
        },
    ],
};

const projectReducer = (state = initialState, action: ProjectActionTypes): ProjectState => {
    switch (action.type) {
        case GET_PROJECT_REQUEST:
            return Object.assign({}, state, {
                data: '',
            });
        case GET_PROJECT_SUCCESS:
            return Object.assign({}, state, {
                data: action.response,
            });
        case GET_PROJECT_FAILURE:
            return Object.assign({}, state, {
                data: '',
            });
        default:
            return state;
    }
};

export default projectReducer;
