/*
 * Hobby Action Types
 */

export const GET_HOBBY_REQUEST = 'GET_HOBBY_REQUEST';
export const GET_HOBBY_SUCCESS = 'GET_HOBBY_SUCCESS';
export const GET_HOBBY_FAILURE = 'GET_HOBBY_FAILURE';

interface Hobby {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    order: number;
}

interface GetHobbyRequestAction {
    type: typeof GET_HOBBY_REQUEST;
}

interface GetHobbySuccessAction {
    type: typeof GET_HOBBY_SUCCESS;
    response: Hobby[];
}

interface GetHobbyFailureAction {
    type: typeof GET_HOBBY_FAILURE;
}

export type HobbyActionTypes = GetHobbyRequestAction | GetHobbySuccessAction | GetHobbyFailureAction;

/*
 *
 */
export function getHobby(): any {
    return { type: GET_HOBBY_REQUEST };
}
