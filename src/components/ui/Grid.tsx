import styled from 'styled-components';

export type GridProps = {
  col?: number,
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(${props => props.col || 1}, 1fr);

  grid-row-gap: 50px;
  grid-column-gap: 50px;
`;

export default Grid;
