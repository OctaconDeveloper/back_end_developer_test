const chai = require("chai");
const expect = chai.expect;

const httpRequest = require("chai-http");
const app = require("../app.js");
const {
  _bulkcreate,
  _deleteAll,
} = require("../src/database/repsoitory/actorRepository");
var chaiAsPromised = require("chai-as-promised");

chai.use(httpRequest);
chai.use(chaiAsPromised);

describe("Get Actors", () => {
  const actors = [
    {
      id: 2790311,
      login: "daniel33",
      avatar_url: "https://avatars.com/2790311",
    },
    {
      id: 2907782,
      login: "eric66",
      avatar_url: "https://avatars.com/2907782",
    },
    {
      id: 4276597,
      login: "iholloway",
      avatar_url: "https://avatars.com/4276597",
    },
    {
      id: 3698252,
      login: "daniel51",
      avatar_url: "https://avatars.com/3698252",
    },
  ];
  it("can retrieve actors", async () => {
    await _deleteAll();
    await _bulkcreate(actors)

    let response = await chai.request(app).get("/v1/actors");
    expect(response.status).equal(200);
    expect(response.body.status).to.be.true;
  });

  it("can retrieve actors by streak", async () => {
    let response = await chai.request(app).get("/v1/actors/streak");
    expect(response.status).equal(200);
    expect(response.body.status).to.be.true;
  });

  it("can uodate actor", async () => {
    await _deleteAll();
    await _bulkcreate(actors)
    let requestBody = 
    {
      id: 2790311,
      login: "daniel33",
      avatar_url: "https://avatars.com/2790311",
    }
    let response = await chai.request(app).put("/v1/actors")
    .send(requestBody);
    expect(response.status).equal(200);
    expect(response.body.status).to.be.true;
  });

});
