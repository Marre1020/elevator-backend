"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elevatorIsAlreadyAtRequestedFloor = void 0;
const elevatorIsAlreadyAtRequestedFloor = ({ elevatorState, floorThatWasCalled, res, }) => {
    const isAlreadyAtRequestedFloor = elevatorState.find((e) => e.floor === floorThatWasCalled);
    if (isAlreadyAtRequestedFloor)
        return res.send({
            ok: false,
            message: "elevator already at requested floor",
        });
};
exports.elevatorIsAlreadyAtRequestedFloor = elevatorIsAlreadyAtRequestedFloor;
//# sourceMappingURL=elevatorIsAlreadyAtRequestedFloor.js.map