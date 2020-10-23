import React from 'react';
import { SongPayload } from '../types/SongPayload';
import SongPlayButton from './SongPlayButton';
import { Card, CardAction, CardContent, CardHeader, CardImage } from './ui/Card';


type Props = {
  result: SongPayload,
}

function MusicSearchResultListItem({
  result,
}: Props) {
  return <Card>
    <CardImage image={result.album.cover_big} />
    <CardContent>
      <CardHeader>
        {result.title_short}
      </CardHeader>
      <div><i>- {result.artist.name}</i></div>
    </CardContent>
    <CardAction>
      <SongPlayButton result={result} />
    </CardAction>
  </Card>
}

export default MusicSearchResultListItem;
