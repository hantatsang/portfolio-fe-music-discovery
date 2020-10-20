import React, { Fragment, useEffect, useState } from 'react';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';
import MusicSearchResultListItem from './MusicSearchResultListItem';

type Props = {
  results: SearchMusicItemPayload[],
}

const audio = new Audio();

function MusicSearchResultList({ results }: Props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string>('');

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, []);

  const playPreview = (url: string) => {
    if (!audio) return;

    if (currentAudioUrl === url && playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.pause();
    audio.src = url;
    audio.play();
    setPlaying(true);
    setCurrentAudioUrl(url);
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
