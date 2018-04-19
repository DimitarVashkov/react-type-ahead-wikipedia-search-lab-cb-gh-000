'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(initialState){
    super(initialState);
  }

  isOutdated(date){
    console.log(date);
    console.log(this.state.updated)
    if (date < this.state.updated){
      return true;
    }else {
    return false;
    }

  }
}

const resultStore = new ResultStore();

export default resultStore;
