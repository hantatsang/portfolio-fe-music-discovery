import React from 'react';
import styled from 'styled-components';
import SearchForm from '../components/SearchForm';

function getSearchDeezer() {
  return fetch('https://rapidapi.p.rapidapi.com/search?q=eminem', {
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'e7a1366ba3msh4cb0f59ac21d295p163f1fjsn437f679b61c5',
      'useQueryString': 'true',
    }
  })
    .then(res => res.json());
}

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
    <SearchForm />
  </Wrapper>
}

export default Home;
