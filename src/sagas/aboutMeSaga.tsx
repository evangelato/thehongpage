import { put, takeLatest, all } from 'redux-saga/effects';
import { getAboutMe } from '../apis/aboutMeApi';
import { GET_ABOUT_ME, GET_ABOUT_ME_SUCCESS, GET_ABOUT_ME_FAIL } from '../actions/aboutMeActions';

function* fetchAboutMe(): any {
    try {
        const response = yield getAboutMe();
        yield put({ type: GET_ABOUT_ME_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_ABOUT_ME_FAIL, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_ABOUT_ME, fetchAboutMe);
}

export default function* aboutMeSaga(): any {
    yield all([actionWatcher()]);
}
