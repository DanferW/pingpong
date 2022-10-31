import { describe, it } from "mocha";
import request from "supertest";
import app from "./server.js";

/*
Testing get all players
*/
describe("GET /users", () => {
  it("respond with json containing all players in the database", (done) => {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
