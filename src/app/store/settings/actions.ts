
import { AgentSetting } from '../agents/agent.model';
import types from './types';

const setSelectedMap = (payload: string) => { return { type: types.SET_SELECTED_MAP, payload } };
const setAgentPosition = (payload: AgentSetting) => {return { type: types.SET_AGENT_POSITION, payload}}
const loadStartingPositions = (payload: AgentSetting[], map: string) => {
  return {type: types.LOAD_STARTING_POSITIONS, payload: {settings: payload, map}}
}

export default {
  setSelectedMap,
  setAgentPosition,
  loadStartingPositions
}