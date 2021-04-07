import express from "express"
import { ElevatorMod } from "../Elevator";

export type CreateRoutes = (args: {
    app: express.Application;
    ElevatorMod: ElevatorMod;
  }) => void;