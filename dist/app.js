"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("express");
const math_routes_1 = __importDefault(require("./routes/math.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const logger_middleware_1 = require("./middleware/logger.middleware");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, express_2.json)());
app.use(logger_middleware_1.requestLogger);
// Routes
app.use('/api', math_routes_1.default);
// Error handling
app.use(error_middleware_1.errorHandler);
exports.default = app;
