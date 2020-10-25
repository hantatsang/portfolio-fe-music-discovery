import React, { Fragment } from 'react';
import { SongPayload } from '../types/SongPayload';
import MusicSearchResultListItem from './MusicSearchResultListItem';
import Grid from './ui/Grid';

type Props = {
  results: SongPayload[],
}

function MusicSearchResultList({ results }: Props) {
  return <Fragment>
    <Grid>
      {results.map((result) => <MusicSearchResultListItem
        key={result.id}
        result={result}
      />)}
    </Grid>
  </Fragment>
}

export default MusicSearchResultList;
