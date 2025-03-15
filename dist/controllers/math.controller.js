"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathController = void 0;
const math_service_1 = require("../services/math.service");
const error_middleware_1 = require("../middleware/error.middleware");
const mathService = new math_service_1.MathService();
class MathController {
    async add(req, res, next) {
        try {
            const { a, b } = req.body;
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new error_middleware_1.AppError(400, 'Both parameters must be numbers');
            }
            const result = await mathService.add(a, b);
            res.json({ result });
        }
        catch (error) {
            next(error);
        }
    }
    async factorial(req, res, next) {
        try {
            const n = parseInt(req.params.number);
            if (isNaN(n)) {
                throw new error_middleware_1.AppError(400, 'Invalid number provided');
            }
            const result = await mathService.factorial(n);
            res.json({ result });
        }
        catch (error) {
            next(error);
        }
    }
    async fibonacci(req, res, next) {
        try {
            const count = parseInt(req.params.count);
            if (isNaN(count)) {
                throw new error_middleware_1.AppError(400, 'Invalid count provided');
            }
            const result = await mathService.fibonacci(count);
            res.json({ result });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.MathController = MathController;
