const getAgents = state => state.agents;
const getAgentsList = state => getAgents(state).agentsList;



export default {
  getAgentsList,
}