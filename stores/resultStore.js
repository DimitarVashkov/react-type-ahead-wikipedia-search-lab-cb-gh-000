'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(initialState){
    super(initialState);
    this.state = {
      results: []
    }
  }

  isOutdated(date){
    if (date < this.getState().updated){
      return true;
    }else {
    return false;
    }

  }
}

const resultStore = new ResultStore();

export default resultStore;
