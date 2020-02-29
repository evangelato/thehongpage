import { put, takeLatest, all } from 'redux-saga/effects';
import { getProject } from '../apis/projectApi';
import { GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE } from '../actions/projectActions';

function* fetchProjects(): any {
    try {
        const response = yield getProject();
        yield put({ type: GET_PROJECT_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_PROJECT_FAILURE, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_PROJECT_REQUEST, fetchProjects);
}

export default function* projectSaga(): any {
    yield all([actionWatcher()]);
}
