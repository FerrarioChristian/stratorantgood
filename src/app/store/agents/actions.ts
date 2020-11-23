import { Agent, AgentSetting } from 'src/app/store/agents/agent.model';
import types from './types';

const loadAgents = (payload: Agent[]) => { return { type: types.LOAD_AGENTS, payload } }/* 
const resetAgents = (payload: AgentSetting[]) => { return { type: types.RESET_AGENTS_SETTINGS, payload} }
const setAgentPosition = (payload: AgentSetting) => { return {type: types.SET_AGENT_POSITION, payload} } */

export default {
  loadAgents,/* 
  resetAgents,
  setAgentPosition */
}