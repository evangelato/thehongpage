import { put, takeLatest, all } from 'redux-saga/effects';
import { getWorkExperience } from '../apis/workExperienceApi';

function* fetchWorkExperiences(): any {
    const response = yield getWorkExperience();
    yield put({ type: 'GOT_WORK_EXPERIENCE', response: response });
}

function* actionWatcher(): any {
    yield takeLatest('GET_WORK_EXPERIENCE', fetchWorkExperiences);
}

export default function* workExperienceSaga(): any {
    yield all([actionWatcher()]);
}
