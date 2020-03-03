import { put, takeLatest, all } from 'redux-saga/effects';
import { getHobby } from '../apis/hobbiesApi';
import { GET_HOBBY_REQUEST, GET_HOBBY_SUCCESS, GET_HOBBY_FAILURE } from '../actions/hobbyActions';

function* fetchHobbies(): any {
    try {
        const response = yield getHobby();
        yield put({ type: GET_HOBBY_SUCCESS, response: response });
    } catch (error) {
        yield put({ type: GET_HOBBY_FAILURE, error });
    }
}

function* actionWatcher(): any {
    yield takeLatest(GET_HOBBY_REQUEST, fetchHobbies);
}

export default function* hobbySaga(): any {
    yield all([actionWatcher()]);
}
