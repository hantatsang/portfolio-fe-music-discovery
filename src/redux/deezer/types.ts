import { SearchMusicRequestPayload } from "../../types/SearchMusicRequestPayload";
import { SearchMusicResponsePayload } from "../../types/SearchMusicResponsePayload";
import { SEARCH_MUSIC, SEARCH_MUSIC_FAIL, SEARCH_MUSIC_SUCCESS } from "./constants";

export interface SearchMusicAction {
  type: typeof SEARCH_MUSIC | typeof SEARCH_MUSIC_SUCCESS | typeof SEARCH_MUSIC_FAIL;
  payload: SearchMusicResponsePayload;
  error: Error | null;
}

export interface SearchMusicActionCreator {
  type: typeof SEARCH_MUSIC;
  payload: SearchMusicRequestPayload;
}

export interface SearchMusicState {
  results: SearchMusicResponsePayload | null;
  error: Error | null;
  status: 'idle' | 'fetching' | 'fetched' | 'error';
}
