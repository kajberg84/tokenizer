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
    const splittedStringAtDots = inputedString.split(/([.])+/)
    const splittedItemsAtSpaces = splittedStringAtDots.filter((item)=>{
      return item !== ' ' && item !== ''
    })
    const removingSpacesFromItem = splittedItemsAtSpaces.map(item => item.trim())
    console.log(removingSpacesFromItem);
  }

  wordAndDotGrammar2(inputedString) {
    console.log("wordAndDotGrammar2");
    const splittedStringAtDotsAndSpaces = inputedString.split(/([.])+/).filter((item)=>{
      return item !== ' ' && item !== ''
    }).map(item => item.trim())

    console.log("short version:", splittedStringAtDotsAndSpaces);
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
        case "wordAndDotGrammar2":
          this.wordAndDotGrammar2(this.inputString);
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
