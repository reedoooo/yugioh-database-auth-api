// const request = require('supertest');
// const express = require('express');
// const router = require('./router');

// // Create a test app using the express framework
// const app = express();
// app.use(express.json());
// app.use('/', router);

// // Mock dataModules
// const mockModel = {
//   get: jest.fn(),
//   create: jest.fn(),
//   update: jest.fn(),
//   delete: jest.fn(),
// };

// jest.mock('../models', () => ({
//   model1: mockModel,
//   model2: mockModel,
// }));

// describe('Routes', () => {
//   describe('GET /:model', () => {
//     it('should get all records for a model and return status code 200', async () => {
//       mockModel.get.mockResolvedValue([{ id: 1, name: 'Record 1' }, { id: 2, name: 'Record 2' }]);
//       const res = await request(app).get('/model1');
//       expect(res.statusCode).toBe(200);
//       expect(res.body).toEqual([{ id: 1, name: 'Record 1' }, { id: 2, name: 'Record 2' }]);
//       expect(mockModel.get).toHaveBeenCalledWith();
//     });

//     // Add more tests to cover different scenarios, such as empty result, error handling, etc.
//   });

//   describe('GET /:model/:id', () => {
//     it('should get a single record by ID and return status code 200', async () => {
//       mockModel.get.mockResolvedValue({ id: 1, name: 'Record 1' });
//       const res = await request(app).get('/model1/1');
//       expect(res.statusCode).toBe(200);
//       expect(res.body).toEqual({ id: 1, name: 'Record 1' });
//       expect(mockModel.get).toHaveBeenCalledWith(1);
//     });

//     // Add more tests to cover different scenarios, such as non-existent ID, error handling, etc.
//   });

//   describe('POST /:model', () => {
//     it('should create a new record and return status code 201', async () => {
//       mockModel.create.mockResolvedValue({ id: 1, name: 'New Record' });
//       const res = await request(app).post('/model1').send({ name: 'New Record' });
//       expect(res.statusCode).toBe(201);
//       expect(res.body).toEqual({ id: 1, name: 'New Record' });
//       expect(mockModel.create).toHaveBeenCalledWith({ name: 'New Record' });
//     });

//     // Add more tests to cover different scenarios, such as invalid input, error handling, etc.
//   });

//   describe('PUT /:model/:id', () => {
//     it('should update an existing record and return status code 200', async () => {
//       mockModel.update.mockResolvedValue({ id: 1, name: 'Updated Record' });
//       const res = await request(app).put('/model1/1').send({ name: 'Updated Record' });
//       expect(res.statusCode).toBe(200);
//       expect(res.body).toEqual({ id: 1, name: 'Updated Record' });
//       expect(mockModel.update).toHaveBeenCalledWith(1, { name: 'Updated Record' });
//     });

//     // Add more tests to cover different scenarios, such as non-existent ID, error handling, etc.
//   });

//   describe('DELETE /:model/:id', () => {
//     it('should delete an existing record and return status code 200', async () => {
//       mockModel.delete.mockResolvedValue({ id: 1, name: 'Deleted Record' });
//       const res = await request(app).delete('/model1/1');
//       expect(res.statusCode).toBe(200);
//       expect(res.body).toEqual({ id: 1, name: 'Deleted Record' });
//       expect(mockModel.delete).toHaveBeenCalledWith(1);
//     });

//     // Add more tests to cover different scenarios, such as non-existent ID, error handling, etc.
//   });
// });
