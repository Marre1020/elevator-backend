

export const elevatorState = [
  { elevator: "1", floor: 4, busy: false },
  { elevator: "2", floor: 5, busy: false },
  { elevator: "3", floor: 6, busy: false },
  { elevator: "4", floor: 7, busy: false },
  { elevator: "5", floor: 8, busy: false },
];

export type Elevator = { elevator: string; floor: number; busy: boolean };

export type ElevatorState = Elevator[];
