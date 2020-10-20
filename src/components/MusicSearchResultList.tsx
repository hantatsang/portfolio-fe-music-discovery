import React, { Fragment } from 'react';
import { SongPayload } from '../types/SongPayload';
import MusicSearchResultListItem from './MusicSearchResultListItem';

type Props = {
  results: SongPayload[],
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
