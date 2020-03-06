/*
 * Skill Action Types
 */

export const GET_SKILL_REQUEST = 'GET_SKILL_REQUEST';
export const GET_SKILL_SUCCESS = 'GET_SKILL_SUCCESS';
export const GET_SKILL_FAILURE = 'GET_SKILL_FAILURE';

interface Skill {
    _id: string;
    title: string;
    imageUrl: string;
    type: string;
    order: number;
}

interface GetSkillRequestAction {
    type: typeof GET_SKILL_REQUEST;
}

interface GetSkillSuccessAction {
    type: typeof GET_SKILL_SUCCESS;
    response: {
        languageData: Skill[];
        toolData: Skill[];
    };
}

interface GetSkillFailureAction {
    type: typeof GET_SKILL_FAILURE;
}

export type SkillActionTypes = GetSkillRequestAction | GetSkillSuccessAction | GetSkillFailureAction;

/*
 * Skill Action Creators
 */
export function getSkill(): any {
    return { type: GET_SKILL_REQUEST };
}
