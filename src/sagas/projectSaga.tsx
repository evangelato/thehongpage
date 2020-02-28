import { put, takeLatest, all } from 'redux-saga/effects';
import { getProject } from '../apis/projectApi';
import { GOT_PROJECT, GET_PROJECT } from '../actions/projectActions';

function* fetchProjects(): any {
    const response = yield getProject();
    yield put({ type: GOT_PROJECT, response: response });
}

function* actionWatcher(): any {
    yield takeLatest(GET_PROJECT, fetchProjects);
}

export default function* projectSaga(): any {
    yield all([actionWatcher()]);
}
