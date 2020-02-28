import { fork } from 'redux-saga/effects';
import aboutMeSaga from './aboutMeSaga';
import workExperienceSaga from './workExperienceSaga';
import projectSaga from './projectSaga';

export default function* rootSaga(): any {
    yield fork(aboutMeSaga);
    yield fork(workExperienceSaga);
    yield fork(projectSaga);
}
