import { SongPayload } from "../../types/SongPayload";
import { PAUSE_MUSIC, PLAY_MUSIC } from "./constants";
import { PauseMusicActionCreator, PlayMusicActionCreator } from "./types";

export const playMusicActionCreator = (payload: SongPayload): PlayMusicActionCreator => ({
  type: PLAY_MUSIC,
  payload,
});


export const pauseMusicActionCreator = (): PauseMusicActionCreator => ({
  type: PAUSE_MUSIC,
});
