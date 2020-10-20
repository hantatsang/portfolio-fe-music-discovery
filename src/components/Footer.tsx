import React from 'react';
import styled from 'styled-components';
import githubLogo from '../assets/github.svg';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dddddd;
  width: 100%;
  text-align: center;
  margin-top: 100px;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

function Footer() {
  return <FooterContainer>
    <p>Powered by RapidAPI/Deezer</p>
    <a href="https://github.com/hantatsang/portfolio-fe-music-discovery" target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} alt="Github" width="40" />
    </a>
  </FooterContainer>
}

export default Footer;
