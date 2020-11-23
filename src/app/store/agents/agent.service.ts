import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import actions from './actions';
import { AgentSetting } from './agent.model';
import agentsList from './agentsList';

@Injectable()
export class AgentService {

  constructor(private store: Store) { }
  
  loadAgents() {
    this.store.dispatch(actions.loadAgents(agentsList));
  } 

  resetAgents() {
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
    this.store.dispatch(actions.resetAgents(newDTO));
  }

}