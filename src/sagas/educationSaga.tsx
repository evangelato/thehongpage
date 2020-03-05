import { put, takeLatest, all } from 'redux-saga/effects';
import { getEducation } from '../apis/educationApi';
import { GET_EDUCATION_REQUEST, GET_EDUCATION_SUCCESS, GET_EDUCATION_FAILURE } from '../actions/educationActions';

function* fetchEducation(): any {
    try {
        const response = yield getEducation();
        yield put({ type: GET_EDUCATION_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_EDUCATION_FAILURE, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_EDUCATION_REQUEST, fetchEducation);
}

export default function* educationSaga(): any {
    yield all([actionWatcher()]);
}
