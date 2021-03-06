import chai from 'chai';
import things from 'chai-things';
import cities from '../resources/cities.json';
const set7 = require('../setsOfThree/set7');
const expect = chai.expect;
chai.should();
chai.use(things);

describe('Set #7', () => {
  describe('Exercise 1: Does it has all the letters?', function(){
    xit('This function must return a boolean', () => {
      expect(set7.allLetters(["monokey", "monkey"])).to.be.a("boolean");
    });
    xit('If it does not have all the letters it should return false', () => {
      expect(set7.allLetters(["monarchy", "bleh"])).to.eql(false);
    });
    xit('If it does not have all the letters it should return true', () => {
      expect(set7.allLetters(["monokey", "monkey"])).to.eql(true);
    });
  });


  describe('Exercise 2: The problem with strings', function(){
    xit('This function must return an array', () => {
      expect(set7.theProblemWithStrings(cities)).to.be.an("array");
    });
    xit('All of the growth_from_2000_to_2013 fields should be above 99 percent', () => {
      let retArr = set7.theProblemWithStrings(cities)
      retArr.map((value) => (parseFloat(value.growth_from_2000_to_2013) / 100.0).toFixed(2) ).should.all.be.above(0.99);
    });
    xit('All of the population fields should be below 100000', () => {
      let retArr = set7.theProblemWithStrings(cities)
      retArr.map((value) => parseInt(value.population, 10) ).should.all.be.below(100000);
    });
  });

  describe('Exercise 3: Is this gramma panna?', function(){
    xit('This function must return a boolean', () => {
      expect(set7.panTheGram("The quick brown fox jumps over the lazy dog.")).to.be.a("boolean");
    });
    xit('A pangrammatic sentence should return true', () => {
      expect(set7.panTheGram("The quick brown fox jumps over the lazy dog.")).to.eql(true);
    });
    xit('A non-pangrammatic sentence should return false', () => {
      expect(set7.panTheGram("The quick brown fox jumps over the lay dog.")).to.eql(false);
    });
  });
});
