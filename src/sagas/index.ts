import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchAboutMe(): any {
    const json = yield fetch('http://localhost:3000/api/aboutMe').then(response => response.json());
    yield put({ type: 'ABOUT_ME_RECEIVED', json: json });
}

function* actionWatcher(): any {
    yield takeLatest('GET_ABOUT_ME', fetchAboutMe);
}

export default function* rootSaga(): any {
    yield all([actionWatcher()]);
}
