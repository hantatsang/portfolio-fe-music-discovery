import { SongPayload } from "../../types/SongPayload";
import { PAUSE_MUSIC, PLAY_MUSIC } from "./constants";

export interface PlayerAction {
  type: typeof PLAY_MUSIC | typeof PAUSE_MUSIC;
  payload: SongPayload;
}

export interface PlayMusicActionCreator {
  type: typeof PLAY_MUSIC;
  payload: SongPayload,
}

export interface PauseMusicActionCreator {
  type: typeof PAUSE_MUSIC;
}

export interface PlayerState {
  song: SongPayload | null;
  status: 'idle' | 'playing' | 'paused';
}
