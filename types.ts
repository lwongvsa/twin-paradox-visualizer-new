export interface SimulationParams {
  distance: number; // Light years
  velocity: number; // Fraction of c (0 to 1)
}

export enum SimulationStep {
  SETUP = 'SETUP',
  OUTBOUND = 'OUTBOUND',
  TURNAROUND = 'TURNAROUND',
  INBOUND = 'INBOUND',
  CONCLUSION = 'CONCLUSION'
}

export interface SimulationMetrics {
  gamma: number;
  bobTotalTime: number;
  aliceTotalTime: number;
  timeGap: number;
}
