import { put, takeLatest, all } from 'redux-saga/effects';
import { getWorkExperience } from '../apis/workExperienceApi';
import {
    GET_WORK_EXPERIENCE,
    GET_WORK_EXPERIENCE_SUCCESS,
    GET_WORK_EXPERIENCE_FAILURE,
} from '../actions/workExperienceActions';

function* fetchWorkExperiences(): any {
    try {
        const response = yield getWorkExperience();
        yield put({ type: GET_WORK_EXPERIENCE_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_WORK_EXPERIENCE_FAILURE, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_WORK_EXPERIENCE, fetchWorkExperiences);
}

export default function* workExperienceSaga(): any {
    yield all([actionWatcher()]);
}
