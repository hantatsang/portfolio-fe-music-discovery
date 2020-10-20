import { SearchMusicItemPayload } from "../../types/SearchMusicItemPayload";
import { PAUSE_MUSIC, PLAY_MUSIC } from "./constants";
import { PauseMusicActionCreator, PlayMusicActionCreator } from "./types";

export const playMusicActionCreator = (payload: SearchMusicItemPayload): PlayMusicActionCreator => ({
  type: PLAY_MUSIC,
  payload,
});


export const pauseMusicActionCreator = (): PauseMusicActionCreator => ({
  type: PAUSE_MUSIC,
});
