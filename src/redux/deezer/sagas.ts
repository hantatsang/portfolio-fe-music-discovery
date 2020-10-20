import { call, Effect, put, takeLatest } from "redux-saga/effects";
import { SearchMusicResponsePayload } from "../../types/SearchMusicResponsePayload";
import getSearchDeezer from "./api";
import { SEARCH_MUSIC, SEARCH_MUSIC_FAIL, SEARCH_MUSIC_SUCCESS } from "./constants";
import { SearchMusicActionCreator } from "./types";

function* searchMusicSaga(action: SearchMusicActionCreator) {
  try {
    const payload: SearchMusicResponsePayload = yield call(getSearchDeezer, action.payload);
    yield put({
      type: SEARCH_MUSIC_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: SEARCH_MUSIC_FAIL,
      error,
    });
  }
}

export function* watchSearchMusicSaga(): Generator<Effect> {
  yield takeLatest(SEARCH_MUSIC, searchMusicSaga);
}
