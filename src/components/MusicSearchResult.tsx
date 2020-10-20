import React from 'react';
import { useSelector } from 'react-redux';
import { SearchMusicState } from '../redux/deezer/types';
import { RootState } from '../redux/types';
import MusicSearchResultList from './MusicSearchResultList';

function MusicSearchResult() {
  const props: SearchMusicState = useSelector(
    (state: RootState) => state.deezer
  );
  const {
    error,
    results,
    status,
  } = props;


  if (status === 'error') {
    return <div>
      <p>Something went wrong</p>
    </div>;
  }

  if (status === 'fetched' && results) {
    return <MusicSearchResultList
      results={results.data}
    />
  }

  return null;
}

export default MusicSearchResult;
