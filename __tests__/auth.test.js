const request = require('supertest');
const { server } = require('../src/server');
const base64 = require('base-64');
const { userDB } = require('../src/auth/models/index');

let userInfo = {
  username: 'reedvogt_user',
  password: 'pfzpgwLIbBGvg1atltIDU34Ea3wwxOQQ',
  role: 'admin'
}

let token;

beforeAll(async () => {
  await userDB.sync();
});

afterAll(async () => {
  await userDB.drop({});
});

describe('Testing authorization & authentication routes', () => {
  const app = request(server);

  test('Can successfully sign up a new user', async () => {
    const response = await app.post('/signup').send(userInfo);

    expect(response.statusCode).toBe(201);
    expect(response.body.user.username).toEqual(userInfo.username);
    expect(response.body.user.role).toEqual(userInfo.role);
  });

  test('Can successfully sign in as an existing user', async () => {
    const encodedCredentials = base64.encode(`${userInfo.username}:${userInfo.password}`);
    const response = await app.post('/signin').set('Authorization', `Basic ${encodedCredentials}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.user.username).toEqual(userInfo.username);
    expect(response.body.user.role).toEqual(userInfo.role);
    expect(response.body.user.token).toBeTruthy();
    token = response.body.user.token;
  });

  test('Can successfully read from /users', async () => {
    const response = await app.get('/users').set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    // Add more specific assertions based on the response structure and expected data
  });

  test('Can access secret area', async () => {
    const response = await app.get('/secret').set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome to the secret area');
  });
});
