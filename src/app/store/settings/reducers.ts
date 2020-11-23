import { Settings } from './settings.model';
import types from './types';

const initialState: Settings = {
  selectedMap: "bind",
  bind: [],
  split: [],
  haven: [],
  ascent: [],
  icebox: [],
}

export function settingsReducer(state = initialState, action) { 
  switch (action.type) {
    case types.SET_SELECTED_MAP:
      return {
        ...state,
        selectedMap: action.payload
      }

    case types.LOAD_STARTING_POSITIONS:
      return {
        ...state,
        [action.payload.map || state.selectedMap]: action.payload.settings
      }
      
    case types.SET_AGENT_POSITION:
      return {
        ...state,
        [state.selectedMap]: state[state.selectedMap].map(el => {
          if(el.name === action.payload.name && el.isOffense === action.payload.isOffense) {
            return action.payload;
          } else {
            return el;
          }
        }),
      }
    default: return state
  }
}