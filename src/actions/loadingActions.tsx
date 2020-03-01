/*
 * Loading Action Types
 */
export const GET_LOADING_STATE = 'GET_LOADING_STATE';
export const GET_ERROR_STATE = 'GET_ERROR_STATE';

interface GetLoadingStateAction {
    type: typeof GET_LOADING_STATE;
    loading: boolean;
}

interface GetErrorStateAction {
    type: typeof GET_ERROR_STATE;
    error: boolean;
}

export type LoadingActionTypes = GetLoadingStateAction | GetErrorStateAction;

/*
 * Loading Action Creators
 */
export function getLoadingState(): any {
    return { type: GET_LOADING_STATE };
}

export function getErrorState(): any {
    return { type: GET_ERROR_STATE };
}
