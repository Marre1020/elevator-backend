import { GetElevatorState } from "./getElevatorState";
import { ElevatorState } from "./elevatorState";
import { CallElevator } from "./callElevator/types";

export type ElevatorMod = {
  elevatorState: ElevatorState;
  getElevatorState: GetElevatorState;
  callElevator: CallElevator;
};

export type CreateElevatorMod = (args: {}) => ElevatorMod;
