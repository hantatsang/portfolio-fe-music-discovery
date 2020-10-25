import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  grid-row-gap: 50px;
  grid-column-gap: 50px;
`;

export default Grid;
