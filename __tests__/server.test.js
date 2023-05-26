const { server: app } = require("../src/server");
const { userDB } = require("../src/auth/models/index");
const { cardAndDecksDB } = require("../src/models/index");
const supertest = require("supertest");

describe("Testing V2 routes", () => {
  let token;
  let serverInstance;
  let request;

  beforeAll(async () => {
    await userDB.sync();
    await cardAndDecksDB.sync();
    serverInstance = app.listen(process.env.PORT);
    request = supertest(serverInstance);

    const response = await request.post("/signin").auth("admin", "password");

    token = response.body.token;
  });

  test("Can GET ALL from V2 decks", async () => {
    const response = await request
      .get("/api/v2/decks")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  }, 10000);

  afterAll(async () => {
    await userDB.drop({});
    await cardAndDecksDB.drop({});
    await serverInstance.close();
  });

  const createModelTests = (modelId, modelData, updatedModelData) => {
    describe(`Testing ${modelId} routes`, () => {
      let recordId;

      test(`Can POST to ${modelId}`, async () => {
        const response = await request
          .post(`/api/v1/${modelId}`)
          .set("Authorization", `Bearer ${token}`)
          .send(modelData);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(modelData));

        recordId = response.body.id; // Set the ID for future use
      }, 10000);

      test(`Can GET ALL from ${modelId}`, async () => {
        const response = await request
          .get(`/api/v1/${modelId}`)
          .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
      }, 10000);

      test(`Can GET ONE from ${modelId}`, async () => {
        const response = await request
          .get(`/api/v1/${modelId}/${recordId}`)
          .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining(modelData));
      }, 10000);

      test(`Can PATCH to ${modelId}`, async () => {
        const response = await request
          .patch(`/api/v1/${modelId}/${recordId}`)
          .set("Authorization", `Bearer ${token}`)
          .send(updatedModelData);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
          expect.objectContaining(updatedModelData)
        );
      }, 10000);

      test(`Can PUT to ${modelId}`, async () => {
        const response = await request
          .put(`/api/v1/${modelId}/${recordId}`)
          .set("Authorization", `Bearer ${token}`)
          .send(updatedModelData);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
          expect.objectContaining(updatedModelData)
        );
      }, 10000);

      test(`Can DELETE from ${modelId}`, async () => {
        const response = await request
          .delete(`/api/v1/${modelId}/${recordId}`)
          .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toBe(1);
      }, 10000);
    });
  };

  const deckModelData = {
    name: "Test Deck",
    description: "This is a test deck",
    author: "Test Author",
  };

  const updatedDeckModelData = {
    name: "Updated Deck",
    description: "This is an updated deck",
    author: "Updated Author",
  };

  const cardModelData = {
    name: "Test Card",
    level: 1,
    attribute: "Test Attribute",
    type: "Test Type",
    race: "Test Race",
  };

  const updatedCardModelData = {
    name: "Updated Card",
    level: 2,
    attribute: "Updated Attribute",
    type: "Updated Type",
    race: "Updated Race",
  };

  createModelTests("decks", deckModelData, updatedDeckModelData);
  createModelTests("cards", cardModelData, updatedCardModelData);
});
