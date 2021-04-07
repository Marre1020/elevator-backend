import express from "express";

export const getElevatorState: GetElevatorState = ({ res, elevatorState }) => {
    res.send(elevatorState);
};

export type GetElevatorState = (args: {
  res: express.Response;
  elevatorState: { elevator: string; floor: number; busy: boolean }[];
}) => void;