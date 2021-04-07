"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callElevatorToRequestedFloor = void 0;
const callElevatorToRequestedFloor = ({ elevatorState, closestElevator, floorThatWasCalled, }) => {
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
exports.callElevatorToRequestedFloor = callElevatorToRequestedFloor;
const _changeElevatorFloorWithRealisticSpeed = ({ closestElevator, floorThatWasCalled, }) => {
    closestElevator.busy = true;
    let interval = setInterval(() => {
        if (floorThatWasCalled < closestElevator.floor) {
            closestElevator.floor--;
        }
        else {
            closestElevator.floor++;
        }
        if (closestElevator.floor === floorThatWasCalled) {
            closestElevator.busy = false;
            clearInterval(interval);
        }
    }, 2000);
};
//# sourceMappingURL=callElevatorToRequestedFloor.js.map