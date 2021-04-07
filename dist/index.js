"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const Elevator_1 = require("./Elevator");
const Routes_1 = require("./Routes");
const app = Server_1.createServer();
const ElevatorMod = Elevator_1.createElevatorMod({ app });
Routes_1.createRoutes({ app, ElevatorMod });
//# sourceMappingURL=index.js.map