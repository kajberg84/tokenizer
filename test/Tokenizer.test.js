import { expect } from "chai";
import { startTokenizer } from "../src/startTokenizer.js";
import { WordAndDotGrammar, ArithmeticGrammar, ExtendedArithmeticGrammar, specifikLetterGrammar } from './testGrammars.js'



describe("Tokenizer Testcases all using MaximalMunch", function () {
  describe("WordAndDotGrammar", function () {
    it('TC1. Should return "a"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a");
      classInstans.startTokenMatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("a");
    });

    it('TC2. [>] Should return "aa"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a aa");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("aa");
    });

    it('TC3. [>] Should return "."', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a.b");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal(".");
    });

    it('TC4. [>>] Should return "b"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a .b");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("b");
    });

    it('TC5. [>>] Should return "b"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "aa.b");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("b");
    });

    it('TC6. [>><] Should return "."', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a.b");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.previousToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal(".");
    });

    it('TC7. Should return "End Token"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "");
      classInstans.startTokenMatch();
      let result = classInstans.getActiveToken().tokenType;
      expect(result).to.be.equal("END");
    });

    it('TC8. Should return "End Token"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, " ");
      classInstans.startTokenMatch();
      let result = classInstans.getActiveToken().tokenType;
      expect(result).to.be.equal("END");
    });

    it('TC9. [>] Should return "End Token"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenType;
      expect(result).to.be.equal("END");
    });

    it('TC10. [<] Should return "a"', function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "a");
      classInstans.startTokenMatch();
      classInstans.previousToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("a");
    });

    it("TC11. Should throw Lexical Error", function () {
      const classInstans = startTokenizer(WordAndDotGrammar, "!");
      expect(() => {
        classInstans.startTokenMatch();
      }).to.throw(Error, "No lexical element matches");
    });
  });

  describe("ArithmeticGrammar", function () {
    it('TC12. Should return "3"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3");
      classInstans.startTokenMatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("3");
    });

    it('TC13. Should return "3.14"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3.14");
      classInstans.startTokenMatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("3.14");
    });

    it('TC14. [>>>] Should return "*"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3 + 54 * 4");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("*");
    });

    it('TC15. Should throw Lexical Error', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3+5 # 4");
      expect(() => {
        classInstans.startTokenMatch();
      }).to.throw(Error, "No lexical element matches");
    });

    it('TC16. [><>>>] Should return "+"', function () {
      const classInstans = startTokenizer(ArithmeticGrammar, "3.0+54.1 + 4.2");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.previousToken();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("+");
    });
  });

  describe('ExtendedArithmeticGrammar using string "3.14 * (5 + 3)"', function () {
    it('TC17. Should return 8 tokens(including END).', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3.14 * (5 + 3)");
      classInstans.startTokenMatch();
      let result = classInstans.allCreatedTokens;
      expect(result).to.have.lengthOf(8);
    });

    it('TC18. [>>] Should return " ( "', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3.14 * (5 + 3)");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("(");
    });

    it('TC19. [>>>>>>] Should return " ) "', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3.14 * (5 + 3)");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal(")");
    });

    it('TC20. [<] Should return 3.14', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3.14 * (5 + 3)");
      classInstans.startTokenMatch();
      classInstans.previousToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("3.14");
    });

    it('TC21. Should throw Lexical Error', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3+5 # 4");
      expect(() => {
        classInstans.startTokenMatch();
      }).to.throw(Error, "No lexical element matches");
    });    
  });

  describe("ExtendedArithmeticGrammar using string '3 / (2 - 1)'", function () {
    it('TC22. [>] Should return " / ".', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3 / (2 - 1)");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("/");
    });
    it('TC23. [>>>>] Should return " - ".', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3 / (2 - 1)");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("-");
    });
    it('TC24. [<] Should return " 3 ".', function () {
      const classInstans = startTokenizer(ExtendedArithmeticGrammar, "3 / (2 - 1)");
      classInstans.startTokenMatch();
      classInstans.previousToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("3");
    });
  });
  
  describe("SpecifikLetterGrammar using string 'AaabBbccC'", function () {
    it('TC25. Should return " Aaa ".', function () {
      const classInstans = startTokenizer(specifikLetterGrammar, "AaabBbccC");
      classInstans.startTokenMatch();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("Aaa");
    });
    it('TC26. [>] Should return " bBb ".', function () {
      const classInstans = startTokenizer(specifikLetterGrammar, "AaabBbccC");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("bBb");
    });
    it('TC27. [>>] Should return " ccC ".', function () {
      const classInstans = startTokenizer(specifikLetterGrammar, "AaabBbccC");
      classInstans.startTokenMatch();
      classInstans.nextToken();
      classInstans.nextToken();
      let result = classInstans.getActiveToken().tokenValue;
      expect(result).to.be.equal("ccC");
    });
  });
})
