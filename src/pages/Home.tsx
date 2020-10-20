import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';
import MusicSearchResult from '../components/MusicSearchResult';
import SearchForm from '../components/SearchForm';
import LayoutContainer from '../components/ui/LayoutContainer';

/**
 * Grid layout to make bottom-sticky footer
 */
const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

function Home() {
  return <Wrapper>
    <LayoutContainer>
      <Header />
      <SearchForm />
      <MusicSearchResult />
      <MusicPlayer />
    </LayoutContainer>
    <Footer />
  </Wrapper>
}

export default Home;
