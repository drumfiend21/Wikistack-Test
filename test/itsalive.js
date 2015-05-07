var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

describe("simple mathematical operations", function() {
    it("expect 2 + 2 to equal 4", function() {
        expect(2 + 2).to.equal(4);
    })
})

describe("asynchronous tests", function() {
    it("settimeout works", function(done) {
        var start = new Date();
        setTimeout(function() {
            var duration = new Date() - start;
            expect(duration).to.be.closeTo(1000, 50);
            done();
        }, 1000)
    })
})


describe("forEach tests", function() {
    it("forEach executes functions once", function(done) {
        var arr = [1, 2, 3, 4, 5, 6];
        var func = function(element) {
            return element
        }
        var spy = chai.spy(func);
        arr.forEach(spy);
        done();
        expect(spy).to.have.been.called.exactly(arr.length);
    });
})