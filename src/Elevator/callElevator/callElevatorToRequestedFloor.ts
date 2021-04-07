import { Elevator, ElevatorState } from "../";

export const callElevatorToRequestedFloor: CallElevatorToRequestedFloor = ({
  elevatorState,
  closestElevator,
  floorThatWasCalled,
}) => {
  const updatedElevatorState = elevatorState.map((e) => {
    if (e.elevator === closestElevator.elevator) {
      _changeElevatorFloorWithRealisticSpeed({
        closestElevator,
        floorThatWasCalled,
      });
      return closestElevator;
    }
    return e;
  });
  return updatedElevatorState;
};

const _changeElevatorFloorWithRealisticSpeed: ChangeElevatorFloorWithRealisticSpeed = ({
  closestElevator,
  floorThatWasCalled,
}) => {
  closestElevator.busy = true;
  let interval = setInterval(() => {
    if (floorThatWasCalled < closestElevator.floor) {
      closestElevator.floor--;
    } else {
      closestElevator.floor++;
    }

    if (closestElevator.floor === floorThatWasCalled) {
      closestElevator.busy = false;
      clearInterval(interval);
    }
  }, 2000);
};

type CallElevatorToRequestedFloor = (args: {
  elevatorState: ElevatorState;
  closestElevator: Elevator;
  floorThatWasCalled: number;
}) => void;

export type ChangeElevatorFloorWithRealisticSpeed = (args: {
  closestElevator: { elevator: string; floor: number; busy: boolean };
  floorThatWasCalled: number;
}) => void;
