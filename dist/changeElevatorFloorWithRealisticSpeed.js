"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeElevatorFloorWithRealisticSpeed = void 0;
const changeElevatorFloorWithRealisticSpeed = ({ closestElevator, floorThatWasCalled }) => {
    closestElevator.busy = true;
    let interval = setInterval(() => {
        if (floorThatWasCalled < closestElevator.floor) {
            closestElevator.floor--;
        }
        else {
            closestElevator.floor++;
        }
        console.log(closestElevator.floor);
        console.log(floorThatWasCalled);
        if (closestElevator.floor === floorThatWasCalled) {
            closestElevator.busy = false;
            clearInterval(interval);
        }
    }, 2000);
};
exports.changeElevatorFloorWithRealisticSpeed = changeElevatorFloorWithRealisticSpeed;
//# sourceMappingURL=changeElevatorFloorWithRealisticSpeed.js.map