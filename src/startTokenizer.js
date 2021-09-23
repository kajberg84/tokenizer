/**
 * Funktion that creates an instance of a class and runs methods.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { Tokenizer } from "./Tokenizer.js";

export function startTokenizer(LexicalGrammar, stringToTokenize) {
  const tokenizerInstans = new Tokenizer(LexicalGrammar, stringToTokenize);
  return tokenizerInstans
}
