var chai    = require("chai");
var assert = chai.assert,
    expect = chai.expect;

describe("Sanity check", function() {
  describe("runs", function() {
    it("can call weather api", function() {
    	try{
    	 	var main = require("../weatherTest");
				main.getWeather(function(w)
				{
					
				});
    	 }catch(error){
    	 	expect(error.message).to.equal('');
    	}
		});
    it("call slack api", function() {
    	try{
					var main = require("../bot");
    	 }catch(error){
    	 	expect(error.message).to.equal('');
    	}
    });		
  });
});
