import { combineReducers } from 'redux';
import deezer from './deezer/reducer';
import player from './player/reducer';

export default combineReducers({
  deezer,
  player,
});
