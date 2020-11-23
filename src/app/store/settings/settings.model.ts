import { AgentSetting } from '../agents/agent.model';

export interface Settings {
  selectedMap: string,
  bind: AgentSetting[],
  haven: AgentSetting[],
  ascent: AgentSetting[],
  split: AgentSetting[],
  icebox: AgentSetting[],
}

export interface Coordinates {
  X: number,
  Y: number
}