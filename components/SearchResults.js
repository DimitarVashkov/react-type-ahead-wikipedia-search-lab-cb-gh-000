'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className='search-results'>
  {results.map((result,index)=>
    <li><p> result.description </p> </li>
  )}
  </ul>
);

export default SearchResults;
