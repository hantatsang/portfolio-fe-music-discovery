import React, { Fragment } from 'react';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';
import MusicSearchResultListItem from './MusicSearchResultListItem';

type Props = {
  results: SearchMusicItemPayload[],
}

function MusicSearchResultList({ results }: Props) {
  return <Fragment>
    {results.map((result) => <MusicSearchResultListItem
      key={result.id}
      result={result}
    />)}
  </Fragment>
}

export default MusicSearchResultList;
