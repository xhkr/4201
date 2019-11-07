import React from 'react';
import { get, map, startsWith, lowerCase } from 'lodash/fp';

// Styles
import styled from 'styled-components';

export const SearchAutoComplete = ({ list, query }) => {

  const suggestions = map(team => {

    // General
    const id = get(['idTeam'], team);
    const name = get(['strTeam'], team);

    // Convert strings to lowercase
    const nameLowerCase = lowerCase(name);
    const termLowerCase = lowerCase(query);

    // Compare strings
    const nameStartsWithTerm = startsWith(termLowerCase, nameLowerCase);

    // Extract sections from strings
    const part1 = name.slice(0, termLowerCase.length);
    const part2 = name.slice(termLowerCase.length);

    if (nameStartsWithTerm) return <Suggestion key={id}><b>{part1}</b>{part2}</Suggestion>;

  }, list);

  return (
    <Root>
      {suggestions}
    </Root>
  );
}

const Root = styled.div`

`;

const Suggestion = styled.div`

`;
