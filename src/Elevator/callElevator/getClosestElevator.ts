import { Elevator, ElevatorState } from "../";

export const getClosestElevator: GetClosestElevator = ({
  floorThatWasCalled,
  elevatorState,
}) => {
  const availableElevators = elevatorState.filter((e) => !e.busy);

  const result = availableElevators.reduce((acc, cur) => {
    const accDiff =
      Math.max(acc.floor, floorThatWasCalled) -
      Math.min(acc.floor, floorThatWasCalled);
    const curDiff =
      Math.max(cur.floor, floorThatWasCalled) -
      Math.min(cur.floor, floorThatWasCalled);

    if (accDiff < curDiff) {
      return acc;
    } else return cur;
  });
  return result;
};

type GetClosestElevator = (args: {
  floorThatWasCalled: number;
  elevatorState: ElevatorState;
}) => Elevator;
