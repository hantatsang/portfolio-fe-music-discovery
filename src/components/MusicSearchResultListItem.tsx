import { library } from '@fortawesome/fontawesome-svg-core';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';

library.add(faPlay, faPause);

const CardImageContainer = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;

type CardImageProps = {
  readonly image: string;
}

const CardImage = styled.div<CardImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-color: #000000;
  transition: all 0.5s;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  }

  &:hover ${CardImage} {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  z-index: 2;
  padding: 25px;
`;

const CardHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const CardAction = styled.div`
  margin-top: auto; // position to bottom of card
  padding-right: 25px;
  text-align: right;
`;

const CardActionButton = styled.button`
  box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
  border: none;
  border-radius: 50%;
  outline: none;
  background: #ff5242;
  color: #ffffff;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.14);
    background: #ff3b29;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

type Props = {
  result: SearchMusicItemPayload,
  playingAudioUrl: string,
  playPreview: Function,
}

function MusicSearchResultListItem({
  result,
  playingAudioUrl,
  playPreview,
}: Props) {
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (playingAudioUrl !== result.preview) {
      setPlaying(false);
    }
  }, [playingAudioUrl, result.preview]);

  const handleClickPlay = (url: string) => {
    playPreview(url);
    setPlaying(!playing);
  }

  return <Card>
    <CardImageContainer>
      <CardImage image={result.album.cover_big} />
    </CardImageContainer>
    <CardContent>
      <CardHeader>
        {result.title_short}
      </CardHeader>
      <p><strong>Album</strong>: {result.album.title}</p>
      <p><strong>Artist</strong>: {result.artist.name}</p>
    </CardContent>
    <CardAction>
      <CardActionButton onClick={() => handleClickPlay(result.preview)}>
        {playing
          ? <FontAwesomeIcon icon="pause" aria-label="pause" />
          : <FontAwesomeIcon icon="play" aria-label="play" />
        }
      </CardActionButton>
    </CardAction>
  </Card>
}

export default MusicSearchResultListItem;
