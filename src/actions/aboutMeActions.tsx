/*
 * About Me Action Types
 */
export const GET_ABOUT_ME = 'GET_ABOUT_ME';
export const GOT_ABOUT_ME = 'GOT_ABOUT_ME';

interface AboutMe {
    _id: string;
    content: string;
    date: string;
}

interface GetAboutMeAction {
    type: typeof GET_ABOUT_ME;
}

interface GotAboutMeAction {
    type: typeof GOT_ABOUT_ME;
    response: AboutMe[];
}

export type AboutMeActionTypes = GetAboutMeAction | GotAboutMeAction;

/*
 * About Me Action Creators
 */
export function getAboutMe(): any {
    return { type: GET_ABOUT_ME };
}
