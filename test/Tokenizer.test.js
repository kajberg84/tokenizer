import { assert, should, expect } from "chai";
import { startTokenizer } from "../src/startTokenizer.js";

const WordAndDotGrammar = [
  {
    tokenType: "WORD",
    tokenRegex: /^[\w|åäöÅÄÖ]+/,
  },
  {
    tokenType: "DOT",
    tokenRegex: /^\./,
  },
];

const ArithmeticGrammar = [
  {
    tokenType:"NUMBER",
    tokenRegex:/\d|\./
  },
  {
    tokenType: "ADD",
    tokenRegex: /^[+]/ 
  },
  {
    tokenType: "MUL",
    tokenRegex: /^[*]/  
  },
  ]

const FloatNumGrammar = [
  {
    tokenType: "FLOAT",
    tokenRegex: /^.*[0-9]|./,
  },
  {
    tokenType: "INTEGER",
    tokenRegex: /\d/,
  },
];

describe("TestCases", function () {
  describe("WordAndDotGrammar", function () {
    it('TC1. Should return "a"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a");
      classInstans.startTokenmatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("a");
    });

    it('TC2. Should return "aa"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a aa");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("aa");
    });

    it('TC3. Should return "."', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a.b");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal(".");
    });

    it('TC4. Should return "b"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a.b");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("b");
    });

    it('TC5. Should return "b"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "aa.b");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("b");
    });

    it('TC6. Should return "."', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a.b");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.previousToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal(".");
    });

    it('TC7. Should return "End Token"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "");
      classInstans.startTokenmatch();
      let result = classInstans.getActiveToken().tokenType;
      expect(result).to.be.equal("END");
    });

    it('TC8. Should return "End Token"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, " ");
      classInstans.startTokenmatch();
      let result = classInstans.getActiveToken().tokenType;
      expect(result).to.be.equal("END");
    });

    it('TC9. Should return "END"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenType;
      expect(result).to.be.equal("END");
    });

    it('TC10. Should return "a"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a");
      classInstans.startTokenmatch();
      classInstans.previousToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("a");
    });

    it("TC11. Should throw Lexical Error", function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "!");
      // classInstans.startTokenmatch();
      expect(() => {
        classInstans.startTokenmatch();
      }).to.throw(Error, "No lexical element matches");
    });
  });

  describe("ArithmeticGrammar", function () {
    it('TC12. Should return "3"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3");
      classInstans.startTokenmatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("3");
    });

    it('TC13. Should return "3.14"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3.14");
      classInstans.startTokenmatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("3.14");
    });

    it('TC14. Should return "*"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3 + 54 * 4");
      classInstans.startTokenmatch();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("*");
    });
  });
});
