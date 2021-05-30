const chai = require("chai");
const expect = chai.expect;

const httpRequest = require("chai-http");
const app = require("../app.js");
const { _deleteAll } = require("../src/database/repsoitory/eventRepository");
var chaiAsPromised = require("chai-as-promised");

chai.use(httpRequest)
chai.use(chaiAsPromised);

describe("Erase Events", () => {

    it("can successfully erase event", async () => {
       let response =  await chai.request(app)
            .delete("/v1/erase")
            expect(response.status).equal(200)
            expect(response.body.status).to.be.true
            expect(response.body.data).equal("Events erased");
        })
})