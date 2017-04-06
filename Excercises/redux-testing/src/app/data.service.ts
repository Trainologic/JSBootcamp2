import { Injectable } from '@angular/core';
import { createStore, Store } from 'redux'

interface IAppStore {
  number: number;
}

interface IAction {
  type: string;
}

@Injectable()
export class DataService {

  store: Store<IAppStore>;

  constructor() {
    this.store = createStore(this.mainReducer, { number: 0 });
  }

  mainReducer(state, action) {
    console.log(state);
    if (action.type == 'PLUS_ONE') {
      return Object.assign({}, state, { number: state.number + 1 });
    }
    return state;
  }

  subscribe(callback) {
    this.store.subscribe(() => {
      callback(this.store.getState());
    });
  }

  dispatch(action: IAction) {
    this.store.dispatch(action);
  }

}
