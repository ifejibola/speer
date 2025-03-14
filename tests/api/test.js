const request = require("supertest");
const app = require("../server");

test("Should signup a user", async () => {
    await request(app)
        .post("/api/auth/signup")
        .send({ username: "testuser", email: "test@example.com", password: "password123" })
        .expect(201);
});
