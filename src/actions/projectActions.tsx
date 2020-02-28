/*
 * Project Action Types
 */

export const GET_PROJECT = 'GET_PROJECT';
export const GOT_PROJECT = 'GOT_PROJECT';

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

interface GotProjecAction {
    type: typeof GOT_PROJECT;
    response: Project[];
}

export type ProjectActionTypes = GetProjectAction | GotProjecAction;

/*
 * Project Action Creators
 */
export function getProject(): any {
    return { type: GET_PROJECT };
}
