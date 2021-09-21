/**
 * Funktion that creates an instance of a class and runs methods.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { KBsTokenizer } from "./kBsTokenizer.js";

export function tokenize(lexicalGrammars, stringToTokenize) {
      const allTokens = new KBsTokenizer(lexicalGrammars, stringToTokenize)
       allTokens.startTokenmatch();
       allTokens.showTokenCollection();
}
