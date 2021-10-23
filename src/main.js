/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.2
 */

import { Tokenizer } from './Tokenizer.js';

/**
 * Starting the tokenizer.
 *
 * @export
 * @param {*} LexicalGrammar
 * @param {*} stringToTokenize
 * @return {*} - Returns a tokenizer
 */

export function startTokenizer(LexicalGrammar, stringToTokenize) {
  return new Tokenizer(LexicalGrammar, stringToTokenize);
}
