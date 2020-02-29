/*
 * About Me Action Types
 */
export const GET_ABOUT_ME = 'GET_ABOUT_ME';
export const GET_ABOUT_ME_SUCCESS = 'GET_ABOUT_ME_SUCCESS';
export const GET_ABOUT_ME_FAIL = 'GET_ABOUT_ME_FAIL';

interface AboutMe {
    _id: string;
    content: string;
    date: string;
}

interface GetAboutMeAction {
    type: typeof GET_ABOUT_ME;
}

interface GetAboutMeSuccessAction {
    type: typeof GET_ABOUT_ME_SUCCESS;
    response: AboutMe[];
}

interface GetAboutMeFailAction {
    type: typeof GET_ABOUT_ME_FAIL;
}

export type AboutMeActionTypes = GetAboutMeAction | GetAboutMeSuccessAction | GetAboutMeFailAction;

/*
 * About Me Action Creators
 */
export function getAboutMe(): any {
    return { type: GET_ABOUT_ME };
}
