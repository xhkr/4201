import React, { useState } from 'react';

// Utils
import { fetchTeams } from '../api/api';
import { get } from 'lodash/fp';
import { getI18n } from 'get-i18n';

// Components
import { SearchAutoComplete } from './SearchAutoComplete';

// Styles
import styled from 'styled-components';

export const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  const search = async (e) => {
    const searchTerm = e.target.value;
    const response = await fetchTeams(searchTerm);
    const teams = get(['data', 'teams'], response)

    setSearchQuery(searchTerm);
    setSearchResults(teams);
  }

  return (
    <Root>
      <Label htmlFor='team-names'>{getI18n('search.label')}</Label>
      <Input type='search'
             id='team-names'
             name='name'
             onChange={(e) => search(e)}
             aria-label={getI18n('search.ariaLabel')} />
      <SearchAutoComplete list={searchResults} query={searchQuery} />
      <Button>{getI18n('search.button')}</Button>
    </Root>
  );
}

const Root = styled.div`

`;

const Label = styled.div`

`;

const Input = styled.input`

`;

const Button = styled.button`

`;
