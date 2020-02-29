/*
 * About Me Action Types
 */
export const GET_ABOUT_ME_REQUEST = 'GET_ABOUT_ME_REQUEST';
export const GET_ABOUT_ME_SUCCESS = 'GET_ABOUT_ME_SUCCESS';
export const GET_ABOUT_ME_FAILURE = 'GET_ABOUT_ME_FAILURE';

interface AboutMe {
    _id: string;
    content: string;
    date: string;
}

interface GetAboutMeRequestAction {
    type: typeof GET_ABOUT_ME_REQUEST;
}

interface GetAboutMeSuccessAction {
    type: typeof GET_ABOUT_ME_SUCCESS;
    response: AboutMe[];
}

interface GetAboutMeFailureAction {
    type: typeof GET_ABOUT_ME_FAILURE;
}

export type AboutMeActionTypes = GetAboutMeRequestAction | GetAboutMeSuccessAction | GetAboutMeFailureAction;

/*
 * About Me Action Creators
 */
export function getAboutMe(): any {
    return { type: GET_ABOUT_ME_REQUEST };
}
