var chai = require("chai");
let { expect, assert } = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("HTTP get product", function () {
  it("get async", async function () {
    let res = await chai
      .request("http://localhost:3006/marketplace-data-service/v1")
      .get(
        "/products/filter?l1=Financial Control&l2=Tax&l2=Statutory Reporting&brand=Halifax&l0=Cash Management %26 Working Capital"
      );

    console.log(res);
    expect(res).to.have.status(200);
  });
});


describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal([1,2,3].indexOf(3), 2);
        })
    })
})