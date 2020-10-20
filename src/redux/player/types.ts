import { SearchMusicItemPayload } from "../../types/SearchMusicItemPayload";
import { PAUSE_MUSIC, PLAY_MUSIC } from "./constants";

export interface PlayerAction {
  type: typeof PLAY_MUSIC | typeof PAUSE_MUSIC;
  payload: SearchMusicItemPayload;
}

export interface PlayMusicActionCreator {
  type: typeof PLAY_MUSIC;
  payload: SearchMusicItemPayload,
}

export interface PauseMusicActionCreator {
  type: typeof PAUSE_MUSIC;
}

export interface PlayerState {
  song: SearchMusicItemPayload | null;
  status: 'idle' | 'playing' | 'paused';
}
