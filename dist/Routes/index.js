"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = void 0;
__exportStar(require("./types"), exports);
const createRoutes = ({ app, ElevatorMod }) => {
    app.get("/getElevatorState", (req, res) => {
        ElevatorMod.getElevatorState({
            res,
            elevatorState: ElevatorMod.elevatorState,
        });
    });
    app.post("/callElevator", (req, res) => {
        ElevatorMod.callElevator({
            req,
            res,
            elevatorState: ElevatorMod.elevatorState,
        });
    });
};
exports.createRoutes = createRoutes;
//# sourceMappingURL=index.js.map