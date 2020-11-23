import { Agent, AgentSetting } from "./agent.model";
import types from './types';
export interface AgentsState {
  agentsList: Agent[],
  agentsSettings: AgentSetting[]
}

const initialState: AgentsState = {
  agentsList: [],
  agentsSettings: []
}

export function agentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_AGENTS:
      return {
        ...state,
        agentsList: action.payload
      }
    default: return state
  }
}