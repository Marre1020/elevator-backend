"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeElevatorFloorWithProperSpeed = void 0;
const changeElevatorFloorWithProperSpeed = ({ closestElevator, floorThatWasCalled }) => {
    // 2 seconds per floor
    let interval = setInterval(() => {
        if (floorThatWasCalled < closestElevator.floor) {
            closestElevator.floor--;
        }
        else {
            closestElevator.floor++;
        }
        console.log(closestElevator);
        if (closestElevator.floor === floorThatWasCalled)
            clearInterval(interval);
    }, 2000);
};
exports.changeElevatorFloorWithProperSpeed = changeElevatorFloorWithProperSpeed;
//# sourceMappingURL=changeElevatorFloorWithProperSpeed.js.map