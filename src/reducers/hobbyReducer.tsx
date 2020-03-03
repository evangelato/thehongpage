import { GET_HOBBY_REQUEST, GET_HOBBY_SUCCESS, GET_HOBBY_FAILURE, HobbyActionTypes } from '../actions/hobbyActions';

interface HobbyType {
    title: string;
    description: string;
    imageUrl: string;
    order: number;
}

interface HobbyState {
    data: HobbyType[];
}

const initialState = {
    data: [
        {
            title: '',
            description: '',
            imageUrl: '',
            order: 0,
        },
    ],
};

const hobbyReducer = (state = initialState, action: HobbyActionTypes): HobbyState => {
    switch (action.type) {
        case GET_HOBBY_REQUEST:
            return Object.assign({}, state, {
                data: '',
            });
        case GET_HOBBY_SUCCESS:
            return Object.assign({}, state, {
                data: action.response,
            });
        case GET_HOBBY_FAILURE:
            return Object.assign({}, state, {
                data: '',
            });
        default:
            return state;
    }
};

export default hobbyReducer;
