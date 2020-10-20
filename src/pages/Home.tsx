import React from 'react';
import styled from 'styled-components';

/**
 * Grid layout to make bottom-sticky footer
 */
const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function Home() {
  return <Wrapper>Hello</Wrapper>
}

export default Home;
