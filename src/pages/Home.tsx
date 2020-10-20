import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import MusicSearchResult from '../components/MusicSearchResult';
import SearchForm from '../components/SearchForm';

/**
 * Grid layout to make bottom-sticky footer
 */
const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function Home() {
  return <Wrapper>
    <header>
      <h1>Discover Music</h1>
    </header>
    <main>
      <SearchForm />
      <MusicSearchResult />
    </main>
    <Footer />
  </Wrapper>
}

export default Home;
