"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callElevator = void 0;
const elevatorIsAlreadyAtRequestedFloor_1 = require("./elevatorIsAlreadyAtRequestedFloor");
const getClosestElevator_1 = require("./getClosestElevator");
const callElevatorToRequestedFloor_1 = require("./callElevatorToRequestedFloor");
const callElevator = ({ req, res, elevatorState }) => {
    const floorThatWasCalled = req.body.floor;
    if (elevatorIsAlreadyAtRequestedFloor_1.elevatorIsAlreadyAtRequestedFloor({
        elevatorState,
        floorThatWasCalled,
        res,
    }))
        return;
    const closestElevator = getClosestElevator_1.getClosestElevator({
        floorThatWasCalled,
        elevatorState,
    });
    callElevatorToRequestedFloor_1.callElevatorToRequestedFloor({
        elevatorState,
        closestElevator,
        floorThatWasCalled,
    });
    const floorsForClosestElevatorToTravel = Math.max(floorThatWasCalled, closestElevator.floor) -
        Math.min(floorThatWasCalled, closestElevator.floor);
    res.send({ ok: true, data: floorsForClosestElevatorToTravel });
};
exports.callElevator = callElevator;
//# sourceMappingURL=index.js.map