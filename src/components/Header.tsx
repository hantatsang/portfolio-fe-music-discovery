import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 100px;
  font-size: 2rem;
  text-align: center;
`;

function Header() {
  return <HeaderContainer>
    <h1>Music Discovery</h1>
  </HeaderContainer>
}

export default Header;
