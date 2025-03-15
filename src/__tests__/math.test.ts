import request from 'supertest';
import app from '../app';

describe('Math Operations API', () => {
  describe('POST /api/addition', () => {
    it('should add two numbers correctly', async () => {
      const response = await request(app)
        .post('/api/addition')
        .send({ a: 5, b: 3 });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('result', 8);
    });

    it('should return 400 for invalid input', async () => {
      const response = await request(app)
        .post('/api/addition')
        .send({ a: 'invalid', b: 3 });

      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/factorial/:number', () => {
    it('should calculate factorial correctly', async () => {
      const response = await request(app)
        .get('/api/factorial/5');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('result', 120);
    });

    it('should return 400 for negative numbers', async () => {
      const response = await request(app)
        .get('/api/factorial/-1');

      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/fibonacci/:count', () => {
    it('should generate fibonacci sequence correctly', async () => {
      const response = await request(app)
        .get('/api/fibonacci/5');

      expect(response.status).toBe(200);
      expect(response.body.result).toEqual([0, 1, 1, 2, 3]);
    });

    it('should return 400 for invalid count', async () => {
      const response = await request(app)
        .get('/api/fibonacci/-1');

      expect(response.status).toBe(400);
    });
  });
}); 
