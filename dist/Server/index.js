"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createServer = () => {
    const app = express_1.default();
    const port = 8080;
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
    return app;
};
exports.createServer = createServer;
//# sourceMappingURL=index.js.map