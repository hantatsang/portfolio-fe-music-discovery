import { PAUSE_MUSIC, PLAY_MUSIC } from "./constants";
import { PlayerAction, PlayerState } from "./types";

const initState: PlayerState = {
  song: null,
  status: 'idle',
}

export default function playerReducer(
  state: PlayerState = initState,
  action: PlayerAction
): PlayerState {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        song: action.payload,
        status: 'playing',
      }

    case PAUSE_MUSIC:
      return {
        ...state,
        status: 'paused'
      }

    default:
      return state;
  }
}
