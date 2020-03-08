import { put, takeLatest, all } from 'redux-saga/effects';
import { getHome } from '../apis/homeApi';
import { GET_HOME_REQUEST, GET_HOME_SUCCESS, GET_HOME_FAILURE } from '../actions/homeActions';

function* fetchHome(): any {
    try {
        const response = yield getHome();
        yield put({ type: GET_HOME_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_HOME_FAILURE, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_HOME_REQUEST, fetchHome);
}

export default function* homeSaga(): any {
    yield all([actionWatcher()]);
}
