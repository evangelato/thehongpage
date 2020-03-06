import { GET_SKILL_REQUEST, GET_SKILL_SUCCESS, GET_SKILL_FAILURE, SkillActionTypes } from '../actions/skillActions';

interface SkillState {
    languageData: any;
    toolData: any;
}

const initialState = {
    languageData: '',
    toolData: '',
};

const skillReducer = (state = initialState, action: SkillActionTypes): SkillState => {
    switch (action.type) {
        case GET_SKILL_REQUEST:
            return Object.assign({}, state, {
                languageData: '',
                toolData: '',
            });
        case GET_SKILL_SUCCESS:
            return Object.assign({}, state, {
                languageData: action.response.languageData,
                toolData: action.response.toolData,
            });
        case GET_SKILL_FAILURE:
            return Object.assign({}, state, {
                languageData: '',
                toolData: '',
            });
        default:
            return state;
    }
};

export default skillReducer;
