import { library } from '@fortawesome/fontawesome-svg-core';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseMusicActionCreator, playMusicActionCreator } from '../redux/player/actions';
import { RootState } from '../redux/types';
import { SongPayload } from '../types/SongPayload';
import ActionButton from './ui/ActionButton';

library.add(faPlay, faPause);

type Props = {
  result: SongPayload,
}

function SongPlayButton({ result }: Props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const dispatch = useDispatch();
  const props = useSelector((state: RootState) =>
    state.player
  );

  useEffect(() => {
    if (props.song === null || props.song.id !== result.id) {
      setPlaying(false);
      return;
    }

    if (props.status === 'playing') {
      setPlaying(true);
    } else if (props.status === 'paused') {
      setPlaying(false);
      return;
    }
  }, [props.song, props.status, result.id]);

  const handleClickPlay = () => {
    !playing
      ? dispatch(playMusicActionCreator(result))
      : dispatch(pauseMusicActionCreator());
  }

  return <ActionButton onClick={handleClickPlay}>
    {playing
      ? <FontAwesomeIcon icon="pause" aria-label="pause" />
      : <FontAwesomeIcon icon="play" aria-label="play" />
    }
  </ActionButton>
}

export default SongPlayButton;
