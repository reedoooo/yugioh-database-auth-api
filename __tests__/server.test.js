// const request = require('supertest');
// const { server } = require('../server'); // Update the import path for the server file
// const router = require('../../src/routes/v1'); // Update the import path for the router file

// const app = express();
// app.use(express.json());
// app.use('/', router);

// describe('Test the routes', () => {
//   // GET all
//   it('should respond with a 200 status code for GET /:model', async () => {
//     const response = await request(app).get('/decks'); // replace 'model' with the actual model name
//     expect(response.statusCode).toBe(200);
//   });

//   // GET one
//   it('should respond with a 200 status code for GET /:model/:id', async () => {
//     const response = await request(app).get('/decks/1'); // replace 'model' with the actual model name
//     expect(response.statusCode).toBe(200);
//   });

//   // POST
//   it('should respond with a 201 status code for POST /:model', async () => {
//     const response = await request(app).post('/decks').send({ name: 'test' }); // replace 'model' with the actual model name
//     expect(response.statusCode).toBe(201);
//   });

//   // PUT
//   it('should respond with a 200 status code for PUT /:model/:id', async () => {
//     const response = await request(app).put('/decks/1').send({ name: 'test' }); // replace 'model' with the actual model name
//     expect(response.statusCode).toBe(200);
//   });

//   // DELETE
//   it('should respond with a 200 status code for DELETE /:model/:id', async () => {
//     const response = await request(app).delete('/decks/1'); // replace 'model' with the actual model name
//     expect(response.statusCode).toBe(200);
//   });
// });
