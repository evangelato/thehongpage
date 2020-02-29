/*
 * Project Action Types
 */

export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAIL = 'GET_PROJECT_FAIL';

interface ExternalUrls {
    sitename: string;
    url: string;
}

interface Project {
    _id: string;
    title: string;
    description: string;
    photoUrl: string;
    tags: string[];
    externalUrls: ExternalUrls[];
    order: number;
}

interface GetProjectAction {
    type: typeof GET_PROJECT;
}

interface GetProjectSuccessAction {
    type: typeof GET_PROJECT_SUCCESS;
    response: Project[];
}

interface GetProjectFailAction {
    type: typeof GET_PROJECT_FAIL;
}

export type ProjectActionTypes = GetProjectAction | GetProjectSuccessAction | GetProjectFailAction;

/*
 * Project Action Creators
 */
export function getProject(): any {
    return { type: GET_PROJECT };
}
