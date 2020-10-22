import styled from "styled-components";
import { ImageDiv } from "./CardImage";

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

  &:hover ${ImageDiv} {
    transform: scale(1.1);
  }
`;

export default Card;
