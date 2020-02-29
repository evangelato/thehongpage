/*
 * Project Action Types
 */

export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

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

interface GetProjectRequestAction {
    type: typeof GET_PROJECT_REQUEST;
}

interface GetProjectSuccessAction {
    type: typeof GET_PROJECT_SUCCESS;
    response: Project[];
}

interface GetProjectFailureAction {
    type: typeof GET_PROJECT_FAILURE;
}

export type ProjectActionTypes = GetProjectRequestAction | GetProjectSuccessAction | GetProjectFailureAction;

/*
 * Project Action Creators
 */
export function getProject(): any {
    return { type: GET_PROJECT_REQUEST };
}
