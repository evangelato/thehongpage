/*
 * Work Experience Action Types
 */
export const GET_WORK_EXPERIENCE_REQUEST = 'GET_WORK_EXPERIENCE_REQUEST';
export const GET_WORK_EXPERIENCE_SUCCESS = 'GET_WORK_EXPERIENCE_SUCCESS';
export const GET_WORK_EXPERIENCE_FAILURE = 'GET_WORK_EXPERIENCE_FAILURE';

interface WorkExperience {
    _id: string;
    companyName: string;
    jobTitle: string;
    description: string[];
    duration: string;
    externalUrls: string[];
    order: number;
}

interface GetWorkExperienceRequestAction {
    type: typeof GET_WORK_EXPERIENCE_REQUEST;
}

interface GetWorkExperienceSuccessAction {
    type: typeof GET_WORK_EXPERIENCE_SUCCESS;
    response: WorkExperience[];
}

interface GetWorkExperienceFailureAction {
    type: typeof GET_WORK_EXPERIENCE_FAILURE;
}

export type WorkExperienceActionTypes =
    | GetWorkExperienceRequestAction
    | GetWorkExperienceSuccessAction
    | GetWorkExperienceFailureAction;

/*
 * Work Experience Action Creators
 */
export function getWorkExperience(): any {
    return { type: GET_WORK_EXPERIENCE_REQUEST };
}
