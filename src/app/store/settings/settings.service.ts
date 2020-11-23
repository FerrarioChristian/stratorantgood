import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AgentSetting } from '../agents/agent.model';
import agentsList from '../agents/agentsList';
import actions from './actions';
import mapList from './map/mapList';
import selectors from './selectors';

@Injectable()
export class SettingsService {

  constructor(private store: Store) { }
  
  selectMap(map: string) {
    this.store.dispatch(actions.setSelectedMap(map));
  } 

  loadStartingSettings() {
    mapList.map(el => {
      this._setAgentsStartingSettingsForMap(el);
    })
  }

  resetAllAgentPosition() {
    this._setAgentsStartingSettingsForMap('');
  }

  _setAgentsStartingSettingsForMap(map: string) {
    let newDTO: AgentSetting[] = [];
    let counter = 0;
    for (let i = 0; i < agentsList.length * 2; i++) {
      newDTO = [
        ...newDTO,
        {
          name: agentsList[counter].name,
          isOffense: i >= agentsList.length,
          positionReset: true,
          offsetX: 0,
          offsetY: 0
        }]
      counter < agentsList.length - 1 ? counter++ : counter = 0;
    }
    this.store.dispatch(actions.loadStartingPositions(newDTO, map));
  }

}