/**
 * Creating an new Tokenizer object.
 *
 * @function writeToConsole -
 * @class KBsTokenizer
 */
export class KBsTokenizer {
  constructor(grammarType, userInputString) {
    this.grammarType = grammarType[0];
    this.inputString = userInputString[0];
  }

  wordAndDotGrammar(inputedString) {
    console.log("wordAndDotGrammar");
    const splittedStringAtDots = inputedString.split(/([. ])+/)
    console.log(splittedStringAtDots);
    const splittedItemsAtSpaces = splittedStringAtDots.filter((item)=>{
      return item !== ' ' && item !== ''
    })
    console.log(splittedItemsAtSpaces);
      }

  arithmeticGrammar() {
    console.log("arithmeticGrammar");
  }

  maximalMunchGrammar() {
    console.log("maximalMunchGrammar");
  }

  exclamationGrammar() {
    console.log("exclamationGrammar");
  }

  startCorrectGrammarFunction() {
    switch (this.grammarType) {
      case "wordAndDotGrammar":
        this.wordAndDotGrammar(this.inputString);
        break;
      case "arithmeticGrammar":
        this.arithmeticGrammar(this.inputString);
        break;
      case "maximalMunchGrammar":
        this.maximalMunchGrammar(this.inputString);
        break;
      case "exclamationGrammar":
        this.exclamationGrammar(this.inputString);
        break;
      default:
        console.log("default grammar or error ? ", this.grammarType);
    }
  }
}
