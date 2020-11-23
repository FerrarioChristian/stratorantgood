import { Settings } from './settings.model';
import types from './types';

const initialState: Settings = {
  selectedMap: "bind"
}

export function settingsReducer(state = initialState, action) { 
  switch (action.type) {
    case types.SET_SELECTED_MAP:
      return {
        ...state,
        selectedMap: action.payload
      }
    default: return state
  }
}