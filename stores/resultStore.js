'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(){
    super();
    this.state = {
      updated: Date.now()
    }
  }

  isOutdated(date){
    if (date < this.state.updated){
      return true;
    }
    return false;

  }
}

const resultStore = new ResultStore();

export default resultStore;
