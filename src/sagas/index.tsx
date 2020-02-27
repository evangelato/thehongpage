import { fork } from 'redux-saga/effects';
import aboutMeSaga from './aboutMeSaga';
import workExperienceSaga from './workExperienceSaga';

export default function* rootSaga(): any {
    yield fork(aboutMeSaga);
    yield fork(workExperienceSaga);
}
