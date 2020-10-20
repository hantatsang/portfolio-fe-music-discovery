import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchMusicActionCreator } from '../redux/deezer/actions';
import { SearchMusicState } from '../redux/deezer/types';
import { RootState } from '../redux/types';
import MusicSearchResultList from './MusicSearchResultList';
import Grid from './ui/Grid';
import LoadingIcon from './ui/LoadingIcon';

const ResultContainer = styled.div`
  margin-top: 75px;
`;

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
    return <ResultContainer>
      <div style={{ textAlign: "center" }}>
        <LoadingIcon />
      </div>
    </ResultContainer>
  }

  if (status === 'error') {
    return <ResultContainer>
      <p>Something went wrong</p>
    </ResultContainer>;
  }

  if (status === 'fetched' && results) {
    return <ResultContainer>
      <Grid>
        <MusicSearchResultList
          results={results.data}
        />
      </Grid>
    </ResultContainer>
  }

  return null;
}

export default MusicSearchResult;
