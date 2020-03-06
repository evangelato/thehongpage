import { put, takeLatest, all } from 'redux-saga/effects';
import { getSkill } from '../apis/skillApi';
import { GET_SKILL_REQUEST, GET_SKILL_SUCCESS, GET_SKILL_FAILURE } from '../actions/skillActions';
import _ from 'lodash';

function* fetchSkills(): any {
    try {
        let response = yield getSkill();
        const languageData = _.orderBy(_.filter(response, { type: 'language' }), ['order'], ['asc']);
        const toolData = _.orderBy(_.filter(response, { type: 'tool' }), ['order'], ['asc']);
        response = { languageData, toolData };
        yield put({ type: GET_SKILL_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_SKILL_FAILURE, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_SKILL_REQUEST, fetchSkills);
}

export default function* skillSaga(): any {
    yield all([actionWatcher()]);
}
