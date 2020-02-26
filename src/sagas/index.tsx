import { fork } from 'redux-saga/effects';
import aboutMeSaga from './aboutMeSaga';

export default function* rootSaga(): any {
    yield fork(aboutMeSaga);
}
