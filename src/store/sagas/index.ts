import { all } from 'redux-saga/effects';
import { watchFetchProjects } from './portfolioSagas';

export default function* rootSaga() {
  yield all([
    watchFetchProjects(),
  ]);
} 