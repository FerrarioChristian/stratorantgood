const getSettings = state => state.settings;
const getAgents = state => state.agents;
const getAgentsList = state => getAgents(state).agentsList;
const getSelectedMap = state => getSettings(state).selectedMap;

const getAgentSettings = (state, map) => getSettings(state)[map] || [];

const getAgentNameByIndex = (state, index) => getAgentsList(state)[index].name || {};
const getAgentSettingsBySideAndIndex = (state, isOffense, index) => getAgentSettings(state, getSelectedMap(state))
  .find(el => el.name === getAgentNameByIndex(state, index) && el.isOffense == isOffense)

export default {
  getSelectedMap,
  getAgentSettingsBySideAndIndex
}