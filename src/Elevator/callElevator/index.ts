import { elevatorIsAlreadyAtRequestedFloor } from "./elevatorIsAlreadyAtRequestedFloor";
import { getClosestElevator } from "./getClosestElevator";
import { CallElevator } from "./types";
import { callElevatorToRequestedFloor } from "./callElevatorToRequestedFloor";

export const callElevator: CallElevator = ({ req, res, elevatorState }) => {
  const floorThatWasCalled = req.body.floor;

  if (
    elevatorIsAlreadyAtRequestedFloor({
      elevatorState,
      floorThatWasCalled,
      res,
    })
  )
    return;

  const closestElevator = getClosestElevator({
    floorThatWasCalled,
    elevatorState,
  });

  callElevatorToRequestedFloor({
    elevatorState,
    closestElevator,
    floorThatWasCalled,
  });

  const floorsForClosestElevatorToTravel =
    Math.max(floorThatWasCalled, closestElevator.floor) -
    Math.min(floorThatWasCalled, closestElevator.floor);

  res.send({ ok: true, data: floorsForClosestElevatorToTravel });
};
