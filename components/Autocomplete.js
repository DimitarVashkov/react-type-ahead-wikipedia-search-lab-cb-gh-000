'use strict'

import React from 'react';
import actions from '../actions';
import resultStore from '../stores/resultStore';

import SearchField from './SearchField';
import SearchResults from './SearchResults';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: ''
    };
  }
  render() {
    return (
      <div className='autocomplete'>
        <h2>Autocomplete</h2>
      </div>
    );
  }
}

export default Autocomplete;
