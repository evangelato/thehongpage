/*
 * Education Action Types
 */
export const GET_EDUCATION_REQUEST = 'GET_EDUCATION_REQUEST';
export const GET_EDUCATION_SUCCESS = 'GET_EDUCATION_SUCCESS';
export const GET_EDUCATION_FAILURE = 'GET_EDUCATION_FAILURE';

interface Education {
    _id: string;
    header: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        imageUrl: string;
    };
    academics: {
        title: string;
        content: string;
        imageUrl: string;
    };
    extracurricular: {
        title: string;
        content: string;
        imageUrl: string;
    };
}

interface GetEducationRequestAction {
    type: typeof GET_EDUCATION_REQUEST;
}

interface GetEducationSuccessAction {
    type: typeof GET_EDUCATION_SUCCESS;
    response: Education[];
}

interface GetEducationFailureAction {
    type: typeof GET_EDUCATION_FAILURE;
}

export type EducationActionTypes = GetEducationRequestAction | GetEducationSuccessAction | GetEducationFailureAction;

/*
 * Education Action Creators
 */
export function getEducation(): any {
    return { type: GET_EDUCATION_REQUEST };
}
