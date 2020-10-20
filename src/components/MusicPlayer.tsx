import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pauseMusicActionCreator } from '../redux/player/actions';
import { RootState } from '../redux/types';
import ActionButton from './ui/ActionButton';

type ContainerProps = {
  active: boolean;
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  padding: 25px 0;
  background-color: #ffffff;
  box-shadow: 0 -1px 10px 2px rgba(0, 0, 0, 0.25);
  height: 150px;
  font-size: 1.2rem;
  transition: all 0.5s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  ${(props) => {
    if (!props.active) {
      return `
        transform: translateY(200%);
      `
    }
  }}
`;

function MusicPlayer() {
  const playerProps = useSelector((state: RootState) =>
    state.player
  );
  const dispatch = useDispatch();
  const { song, status } = playerProps;

  const handleClickPlay = () => {
    dispatch(pauseMusicActionCreator());
  }

  return <Container
    active={status === 'playing'}
  >
    {
      status === 'playing' && song !== null
        ? <Fragment>
          <span>{song.title} ({song.artist.name})</span>
          <ActionButton onClick={handleClickPlay}>
            <FontAwesomeIcon icon="pause" aria-label="pause" />
          </ActionButton>
        </Fragment>
        : null
    }
  </Container >
}

export default MusicPlayer;
