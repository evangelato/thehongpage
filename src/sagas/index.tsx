import { fork } from 'redux-saga/effects';
import homeSaga from './homeSaga';
import aboutMeSaga from './aboutMeSaga';
import workExperienceSaga from './workExperienceSaga';
import educationSaga from './educationSaga';
import projectSaga from './projectSaga';
import skillSaga from './skillSaga';
import hobbySaga from './hobbySaga';

export default function* rootSaga(): any {
    yield fork(homeSaga);
    yield fork(aboutMeSaga);
    yield fork(workExperienceSaga);
    yield fork(educationSaga);
    yield fork(projectSaga);
    yield fork(skillSaga);
    yield fork(hobbySaga);
}
