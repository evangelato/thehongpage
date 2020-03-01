interface LoadingState {
    loading: boolean;
    error: boolean;
}

const initialState = {
    loading: false,
    error: false,
};

const loadingReducer = (state = initialState, action: any): LoadingState => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) {
        return state;
    }
    const [, , requestState] = matches;

    return {
        ...state,
        loading: requestState === 'REQUEST',
        error: requestState === 'FAILURE',
    };
};

export default loadingReducer;
