'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(){
    super();
    this.state = {
      updated: Date.now()
    }
  }

  isOutdated(){

  }
}

const resultStore = new ResultStore();

export default resultStore;
