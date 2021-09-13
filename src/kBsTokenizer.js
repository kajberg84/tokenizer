export class KBsTokenizer {
  constructor(grammarType, inputString) {
    this.grammarType = grammarType; // exempel WordAndDotGrammar
    this.inputString = inputString;
    this.regex;
  }

  writeToConsole() {
    console.log(this.grammarType);
    console.log(this.inputString);
  }

  getRegexForToken() {
    switch (this.grammarType) {
      case "word":
        this.regex = "/234234/";
        break;
      case "number":
        this.regex = "/234234/";
        break;
      case "arithmetic":
        this.regex = "/234234/";
        break;
    }
  }
}
