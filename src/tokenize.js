
import { KBsTokenizer } from "./kBsTokenizer.js";

export function tokenize(lexicalGrammars, stringToTokenize) {
      const allTokens = new KBsTokenizer(lexicalGrammars, stringToTokenize)
       allTokens.checkForBestTokenMatch()
}
