import express from "express";
import { ElevatorState } from "../elevatorState";

export type CallElevator = (args: {
  req: {
    body: {
      floor: number;
    };
  };
  res: express.Response;
  elevatorState: ElevatorState;
}) => void;
