/*
 * Work Experience Action Types
 */
export const GET_WORK_EXPERIENCE = 'GET_WORK_EXPERIENCE';
export const GOT_WORK_EXPERIENCE = 'GOT_WORK_EXPERIENCE';

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

interface GotWorkExperienceAction {
    type: typeof GOT_WORK_EXPERIENCE;
    response: WorkExperience[];
}

export type WorkExperienceActionTypes = GetWorkExperienceAction | GotWorkExperienceAction;

/*
 * Work Experience Action Creators
 */
export function getWorkExperience(): any {
    return { type: GET_WORK_EXPERIENCE };
}
