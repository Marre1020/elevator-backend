import express from "express";
import { ElevatorState } from "../";

export const elevatorIsAlreadyAtRequestedFloor: ElevatorIsAlreadyAtRequestedFloor = ({
  elevatorState,
  floorThatWasCalled,
  res,
}) => {
  const isAlreadyAtRequestedFloor = elevatorState.find(
    (e) => e.floor === floorThatWasCalled
  );
  if (isAlreadyAtRequestedFloor) {
    return res.send({
      ok: false,
      message: "elevator already at requested floor",
    });
  }
};

type ElevatorIsAlreadyAtRequestedFloor = (args: {
  elevatorState: ElevatorState;
  floorThatWasCalled: number;
  res: express.Response;
}) => express.Response | void;
