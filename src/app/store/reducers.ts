import { agentsReducer } from "./agents/reducer";
import { settingsReducer } from './settings';

export default {
  agents: agentsReducer,
  settings: settingsReducer
}