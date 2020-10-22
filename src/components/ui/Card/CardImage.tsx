import React from 'react';
import styled from "styled-components";

const CardImageContainer = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;

type ImageDivProps = {
  readonly image: string,
}

export const ImageDiv = styled.div<ImageDivProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-color: #000000;
  transition: all 0.5s;
`;

type CardImageProps = {
  image: string,
}

function CardImage({ image, ...rest }: CardImageProps) {
  return <CardImageContainer>
    <ImageDiv image={image} {...rest} />
  </CardImageContainer>
}

export default CardImage;
