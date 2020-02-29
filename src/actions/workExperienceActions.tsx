/*
 * Work Experience Action Types
 */
export const GET_WORK_EXPERIENCE = 'GET_WORK_EXPERIENCE';
export const GET_WORK_EXPERIENCE_SUCCESS = 'GET_WORK_EXPERIENCE_SUCCESS';
export const GET_WORK_EXPERIENCE_FAILURE = 'GET_WORK_EXPERIENCE_FAILURE';

interface WorkExperience {
    _id: string;
    companyName: string;
    jobTitle: string;
    description: string;
    duration: string;
}

interface GetWorkExperienceAction {
    type: typeof GET_WORK_EXPERIENCE;
}

interface GetWorkExperienceSuccessAction {
    type: typeof GET_WORK_EXPERIENCE_SUCCESS;
    response: WorkExperience[];
}

interface GetWorkExperienceFailureAction {
    type: typeof GET_WORK_EXPERIENCE_FAILURE;
}

export type WorkExperienceActionTypes =
    | GetWorkExperienceAction
    | GetWorkExperienceSuccessAction
    | GetWorkExperienceFailureAction;

/*
 * Work Experience Action Creators
 */
export function getWorkExperience(): any {
    return { type: GET_WORK_EXPERIENCE };
}
