import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchWorkExperiences(): any {
    const response = yield fetch('http://localhost:4000/api/workExperiences').then(res => res.json());
    yield put({ type: 'GOT_WORK_EXPERIENCE', response: response });
}

function* actionWatcher(): any {
    yield takeLatest('GET_WORK_EXPERIENCE', fetchWorkExperiences);
}

export default function* workExperienceSaga(): any {
    yield all([actionWatcher()]);
}
