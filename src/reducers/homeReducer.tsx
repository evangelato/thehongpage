import { GET_HOME_REQUEST, GET_HOME_SUCCESS, GET_HOME_FAILURE, HomeActionTypes } from '../actions/homeActions';

interface HomeState {
    data: any;
}

const initialState = {
    data: '',
};

const homeReducer = (state = initialState, action: HomeActionTypes): HomeState => {
    switch (action.type) {
        case GET_HOME_REQUEST:
            return Object.assign({}, state, {
                data: '',
            });
        case GET_HOME_SUCCESS:
            return Object.assign({}, state, {
                data: action.response[0],
            });
        case GET_HOME_FAILURE:
            return Object.assign({}, state, {
                data: '',
            });
        default:
            return state;
    }
};

export default homeReducer;
