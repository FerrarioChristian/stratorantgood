const getAgents = state => state.agents;
const getAgentSettings = state => getAgents(state).agentsSettings || [];
const getAgentsList = state => getAgents(state).agentsList;

const getAgentNameByIndex = (state, index) => getAgentsList(state)[index].name || {};
const getAgentSettingsBySideAndIndex = (state, isOffense, index) => getAgentSettings(state)
  .find(el => el.name === getAgentNameByIndex(state, index) && el.isOffense == isOffense)

export default {
  getAgentsList,
  getAgentNameByIndex,
  getAgentSettingsBySideAndIndex
}