import { library } from '@fortawesome/fontawesome-svg-core';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseMusicActionCreator, playMusicActionCreator } from '../redux/player/actions';
import { RootState } from '../redux/types';
import { SongPayload } from '../types/SongPayload';
import ActionButton from './ui/ActionButton';
import { Card, CardAction, CardContent, CardHeader, CardImage } from './ui/Card';

library.add(faPlay, faPause);

// const CardImageContainer = styled.div`
//   width: 100%;
//   height: 280px;
//   border-radius: 15px 15px 0 0;
//   overflow: hidden;
// `;

// type CardImageProps = {
//   readonly image: string;
// }

// const CardImage = styled.div<CardImageProps>`
//   width: 100%;
//   height: 100%;
//   background-image: url(${props => props.image});
//   background-size: cover;
//   background-position: center;
//   background-color: #000000;
//   transition: all 0.5s;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 25px;
//   background: #ffffff;
//   border-radius: 15px;
//   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
//   transition: all 0.5s;

//   &:hover {
//     box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
//   }

//   &:hover ${CardImage} {
//     transform: scale(1.1);
//   }
// `;

// const CardContent = styled.div`
//   z-index: 2;
//   padding: 25px;
// `;

// const CardHeader = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   text-align: center;
// `;

// const CardAction = styled.div`
//   margin-top: auto; // position to bottom of card
//   padding-right: 25px;
//   text-align: right;
// `;

type Props = {
  result: SongPayload,
}

function MusicSearchResultListItem({
  result,
}: Props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const dispatch = useDispatch();
  const props = useSelector((state: RootState) =>
    state.player
  );

  useEffect(() => {
    if (props.song === null || props.song.id !== result.id) {
      setPlaying(false);
      return;
    }

    if (props.status === 'playing') {
      setPlaying(true);
    } else if (props.status === 'paused') {
      setPlaying(false);
      return;
    }
  }, [props.song, props.status, result.id]);

  const handleClickPlay = (url: string) => {
    !playing
      ? dispatch(playMusicActionCreator(result))
      : dispatch(pauseMusicActionCreator());
  }

  return <Card>
    <CardImage image={result.album.cover_big} />
    <CardContent>
      <CardHeader>
        {result.title_short}
      </CardHeader>
      <div><i>- {result.artist.name}</i></div>
    </CardContent>
    <CardAction>
      <ActionButton onClick={() => handleClickPlay(result.preview)}>
        {playing
          ? <FontAwesomeIcon icon="pause" aria-label="pause" />
          : <FontAwesomeIcon icon="play" aria-label="play" />
        }
      </ActionButton>
    </CardAction>
  </Card>
}

export default MusicSearchResultListItem;
