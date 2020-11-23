import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coordinates } from '../settings/settings.model';
import actions from './actions';
import settingsActions from '../settings/actions';
import { AgentSetting } from './agent.model';
import agentsList from './agentsList';

@Injectable()
export class AgentService {

  constructor(private store: Store) { }
  
  loadAgents() {
    this.store.dispatch(actions.loadAgents(agentsList));
  }

  setAgentPosition(agent: AgentSetting, coordinates: Coordinates) {
    const newAgent: AgentSetting = {
      ...agent,
      offsetX: coordinates.X,
      offsetY: coordinates.Y
    }
    this.store.dispatch(settingsActions.setAgentPosition(newAgent));
  }

}