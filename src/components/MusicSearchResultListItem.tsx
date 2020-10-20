import React from 'react';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';

type Props = {
  result: SearchMusicItemPayload,
}

function MusicSearchResultListItem({ result }: Props) {
  return <div>
    <img src={result.album.cover_big} alt={result.title} />
    {result.type}
    {result.title}
    {result.artist.name}
  </div>
}

export default MusicSearchResultListItem;
