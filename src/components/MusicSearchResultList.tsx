import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseMusicActionCreator, playMusicActionCreator } from '../redux/player/actions';
import { RootState } from '../redux/types';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';
import MusicSearchResultListItem from './MusicSearchResultListItem';

type Props = {
  results: SearchMusicItemPayload[],
}

const audio = new Audio();

function MusicSearchResultList({ results }: Props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string>('');
  const dispatch = useDispatch();
  const props = useSelector((state: RootState) =>
    state.player
  );

  useEffect(() => {
    return () => {
      audio.pause();
      dispatch(pauseMusicActionCreator());
    };
  }, [dispatch]);

  useEffect(() => {
    if (props.song === null) return;

    if (props.status === 'playing') {
      audio.pause();
      audio.src = props.song.preview;
      audio.play();
      setPlaying(true);
    } else if (props.status === 'paused') {
      audio.pause();
      setPlaying(false);
      return;
    }
  }, [props.song, props.status]);

  const playPreview = (url: string) => {
    if (!audio) return;

    if (currentAudioUrl === url && playing) {
      audio.pause();
      setPlaying(false);
      dispatch(pauseMusicActionCreator());
      return;
    }

    audio.pause();
    audio.src = url;
    audio.play();
    setPlaying(true);
    setCurrentAudioUrl(url);
    dispatch(playMusicActionCreator(results[0]));
  };

  return <Fragment>
    {results.map((result) => <MusicSearchResultListItem
      key={result.id}
      playPreview={playPreview}
      playingAudioUrl={currentAudioUrl}
      result={result}
    />)}
  </Fragment>
}

export default MusicSearchResultList;
