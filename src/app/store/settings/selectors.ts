const getSettings = state => state.settings;
const getSelectedMap = state => getSettings(state).selectedMap;

export default {
  getSelectedMap
}