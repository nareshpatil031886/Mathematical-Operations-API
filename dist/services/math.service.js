"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathService = void 0;
const client_1 = require("@prisma/client");
const error_middleware_1 = require("../middleware/error.middleware");
const prisma = new client_1.PrismaClient();
class MathService {
    async add(a, b) {
        const result = a + b;
        await this.saveOperation('addition', JSON.stringify({ a, b }), result.toString());
        return result;
    }
    async factorial(n) {
        if (n < 0)
            throw new error_middleware_1.AppError(400, 'Factorial is not defined for negative numbers');
        if (n > 170)
            throw new error_middleware_1.AppError(400, 'Number too large for factorial calculation');
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        await this.saveOperation('factorial', JSON.stringify({ n }), result.toString());
        return result;
    }
    async fibonacci(count) {
        if (count < 1)
            throw new error_middleware_1.AppError(400, 'Count must be positive');
        if (count > 100)
            throw new error_middleware_1.AppError(400, 'Count too large for Fibonacci sequence');
        const sequence = [0];
        if (count > 1)
            sequence.push(1);
        for (let i = 2; i < count; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        await this.saveOperation('fibonacci', JSON.stringify({ count }), JSON.stringify(sequence));
        return sequence;
    }
    async saveOperation(type, input, result) {
        return await prisma.operation.create({
            data: {
                type,
                input,
                result
            }
        });
    }
}
exports.MathService = MathService;
