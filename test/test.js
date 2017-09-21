var chai    = require("chai");
var assert = chai.assert,
    expect = chai.expect;

describe("Sanity check", function() {
  describe("runs", function() {
    it("doesn't crash", function() {
    	try{
    	 	var main = require("../weatherTest");
    	 	main.getWeather();
    	 }catch(error){
    	 	expect(error.message).to.equal('');
    	 }
    });
  });
});