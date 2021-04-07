import { getElevatorState } from "./getElevatorState";
import { elevatorState } from "./elevatorState";
import { CreateElevatorMod } from "./types";
import { callElevator } from "./callElevator";

export const createElevatorMod: CreateElevatorMod = () => {
  return {
    elevatorState,
    getElevatorState,
    callElevator,
  };
};

export * from "./types";
export { GetElevatorState } from "./getElevatorState";
export { Elevator, ElevatorState } from "./elevatorState";