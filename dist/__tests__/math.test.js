"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Math Operations API', () => {
    describe('POST /api/addition', () => {
        it('should add two numbers correctly', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/addition')
                .send({ a: 5, b: 3 });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('result', 8);
        });
        it('should return 400 for invalid input', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/addition')
                .send({ a: 'invalid', b: 3 });
            expect(response.status).toBe(400);
        });
    });
    describe('GET /api/factorial/:number', () => {
        it('should calculate factorial correctly', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/factorial/5');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('result', 120);
        });
        it('should return 400 for negative numbers', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/factorial/-1');
            expect(response.status).toBe(400);
        });
    });
    describe('GET /api/fibonacci/:count', () => {
        it('should generate fibonacci sequence correctly', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/fibonacci/5');
            expect(response.status).toBe(200);
            expect(response.body.result).toEqual([0, 1, 1, 2, 3]);
        });
        it('should return 400 for invalid count', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/fibonacci/-1');
            expect(response.status).toBe(400);
        });
    });
});
