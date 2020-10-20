import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseMusicActionCreator } from '../redux/player/actions';
import { RootState } from '../redux/types';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';
import MusicSearchResultListItem from './MusicSearchResultListItem';

type Props = {
  results: SearchMusicItemPayload[],
}

const audio = new Audio();

function MusicSearchResultList({ results }: Props) {
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
    } else if (props.status === 'paused') {
      audio.pause();
      return;
    }
  }, [props.song, props.status]);

  return <Fragment>
    {results.map((result) => <MusicSearchResultListItem
      key={result.id}
      result={result}
    />)}
  </Fragment>
}

export default MusicSearchResultList;
