import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMusicActionCreator } from '../redux/deezer/actions';
import { SearchMusicState } from '../redux/deezer/types';
import { RootState } from '../redux/types';
import MusicSearchResultList from './MusicSearchResultList';

function MusicSearchResult() {
  const dispatch = useDispatch();
  const props: SearchMusicState = useSelector(
    (state: RootState) => state.deezer
  );
  const {
    results,
    status,
  } = props;

  useEffect(() => {
    dispatch(searchMusicActionCreator({
      query: 'Australia',
    }));
  }, [dispatch]);

  if (status === 'fetching') {
    return <div>Loading...</div>
  }

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
