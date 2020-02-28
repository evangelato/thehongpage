import { GET_PROJECT, GOT_PROJECT, ProjectActionTypes } from '../actions/projectActions';

interface ProjectState {
    loading: boolean;
    data: any;
}

const initialState = {
    loading: false,
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
        case GOT_PROJECT:
            return Object.assign({}, state, {
                loading: false,
                data: action.response,
            });
        default:
            return state;
    }
}

export default projectReducer;
