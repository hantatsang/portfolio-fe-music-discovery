import React from 'react';
import styled from 'styled-components';
import { SearchMusicItemPayload } from '../types/SearchMusicItemPayload';


const Card = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  }
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

const CardImageContainer = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;

  &:hover ${CardImage} {
    transform: scale(1.1);

  }
`;

const CardContent = styled.div`
  z-index: 2;
  padding: 20px;
  text-align: center;
`;

const CardHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const CardAction = styled.div``;

type Props = {
  result: SearchMusicItemPayload,
}

function MusicSearchResultListItem({ result }: Props) {
  return <Card>
    {/* <img src={result.album.cover_big} alt={result.title} /> */}
    <CardImageContainer>
      <CardImage image={result.album.cover_big} />
    </CardImageContainer>
    <CardContent>
      <CardHeader>
        {result.title_short}
      </CardHeader>
      {result.artist.name}
    </CardContent>
  </Card>
}

export default MusicSearchResultListItem;
