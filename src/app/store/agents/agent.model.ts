export interface Agent { 
  name: string,
}

export interface AgentSetting {
  name: string,
  positionReset: boolean,
  isOffense: boolean,
  offsetX: number,
  offsetY: number
}