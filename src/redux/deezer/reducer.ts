import { SEARCH_MUSIC, SEARCH_MUSIC_FAIL, SEARCH_MUSIC_SUCCESS } from "./constants";
import { SearchMusicAction, SearchMusicState } from "./types";

const initState: SearchMusicState = {
  error: null,
  results: null,
  status: 'idle',
}

export default function deezerReducer(
  state: SearchMusicState = initState,
  action: SearchMusicAction
): SearchMusicState {
  switch (action.type) {
    case SEARCH_MUSIC:
      return {
        ...state,
        status: 'fetching',
      }

    case SEARCH_MUSIC_SUCCESS:
      return {
        ...state,
        status: 'fetched',
        results: { ...action.payload },
      }

    case SEARCH_MUSIC_FAIL:
      return {
        ...state,
        status: 'error',
        error: action.error,
      }
  }

  return state;
}
