import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchAboutMe(): any {
    const response = yield fetch('http://localhost:4000/api/aboutMe').then(res => res.json());
    yield put({ type: 'GOT_ABOUT_ME', response: response });
}

function* actionWatcher(): any {
    yield takeLatest('GET_ABOUT_ME', fetchAboutMe);
}

export default function* aboutMeSaga(): any {
    yield all([actionWatcher()]);
}
