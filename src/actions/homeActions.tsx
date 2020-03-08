/*
 * Home Action Types
 */

export const GET_HOME_REQUEST = 'GET_HOME_REQUEST';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILURE = 'GET_HOME_FAILURE';

interface Home {
    _id: string;
    resumeUrl: string;
    email: string;
    date: Date;
}

interface GetHomeRequestAction {
    type: typeof GET_HOME_REQUEST;
}

interface GetHomeSuccessAction {
    type: typeof GET_HOME_SUCCESS;
    response: Home[];
}

interface GetHomeFailureAction {
    type: typeof GET_HOME_FAILURE;
}

export type HomeActionTypes = GetHomeRequestAction | GetHomeSuccessAction | GetHomeFailureAction;

/*
 * Home Action Creators
 */
export function getHome(): any {
    return { type: GET_HOME_REQUEST };
}
