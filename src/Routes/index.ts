import express from "express";
import { CreateRoutes } from "./types";
export * from "./types"

export const createRoutes: CreateRoutes = ({ app, ElevatorMod }) => {
  app.get(
    "/getElevatorState",
    (req: express.Request, res: express.Response) => {
      ElevatorMod.getElevatorState({
        res,
        elevatorState: ElevatorMod.elevatorState,
      });
    }
  );

  app.post("/callElevator", (req: express.Request, res: express.Response) => {
    ElevatorMod.callElevator({
      req,
      res,
      elevatorState: ElevatorMod.elevatorState,
    });
  });
};
