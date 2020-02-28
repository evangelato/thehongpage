import { put, takeLatest, all } from 'redux-saga/effects';
import { getAboutMe } from '../apis/aboutMeApi';
import { GOT_ABOUT_ME, GET_ABOUT_ME } from '../actions/aboutMeActions';

function* fetchAboutMe(): any {
    const response = yield getAboutMe();
    yield put({ type: GOT_ABOUT_ME, response: response });
}

function* actionWatcher(): any {
    yield takeLatest(GET_ABOUT_ME, fetchAboutMe);
}

export default function* aboutMeSaga(): any {
    yield all([actionWatcher()]);
}
