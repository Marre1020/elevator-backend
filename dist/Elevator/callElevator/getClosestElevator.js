"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestElevator = void 0;
const getClosestElevator = ({ floorThatWasCalled, elevatorState, }) => {
    const availableElevators = elevatorState.filter((e) => !e.busy);
    const result = availableElevators.reduce((acc, cur) => {
        const accDiff = Math.max(acc.floor, floorThatWasCalled) -
            Math.min(acc.floor, floorThatWasCalled);
        const curDiff = Math.max(cur.floor, floorThatWasCalled) -
            Math.min(cur.floor, floorThatWasCalled);
        if (accDiff < curDiff) {
            return acc;
        }
        else
            return cur;
    });
    return result;
};
exports.getClosestElevator = getClosestElevator;
//# sourceMappingURL=getClosestElevator.js.map