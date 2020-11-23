import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import actions from './actions';

@Injectable()
export class SettingsService {

  constructor(private store: Store) { }
  
  selectMap(map: string) {
    this.store.dispatch(actions.setSelectedMap(map));
  } 

}