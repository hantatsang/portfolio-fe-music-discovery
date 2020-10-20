import { all } from 'redux-saga/effects';
import { watchSearchMusicSaga } from './deezer/sagas';

export default function* rootSaga() {
  yield all([
    watchSearchMusicSaga(),
  ]);
};
