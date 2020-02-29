import { GET_PROJECT, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE, ProjectActionTypes } from '../actions/projectActions';

interface ProjectState {
    loading: boolean;
    error: boolean;
    data: any;
}

const initialState = {
    loading: false,
    error: false,
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

function projectReducer(state = initialState, action: ProjectActionTypes): ProjectState {
    switch (action.type) {
        case GET_PROJECT:
            return Object.assign({}, state, {
                loading: true,
            });
        case GET_PROJECT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                data: action.response,
            });
        case GET_PROJECT_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        default:
            return state;
    }
}

export default projectReducer;
