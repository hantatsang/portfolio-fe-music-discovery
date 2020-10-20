import { SearchMusicRequestPayload } from "../../types/SearchMusicRequestPayload";
import { SEARCH_MUSIC } from "./constants";
import { SearchMusicActionCreator } from "./types";

export const searchMusicActionCreator = (payload: SearchMusicRequestPayload): SearchMusicActionCreator => ({
  type: SEARCH_MUSIC,
  payload,
});
