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

  handleChange(event){
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className='autocomplete'>
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.handleChange}/>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default Autocomplete;
