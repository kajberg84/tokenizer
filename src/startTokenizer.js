/**
 * Funktion that creates an instance of a class and runs methods.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { Tokenizer } from "./Tokenizer.js";

import * as test from "./testCases.js"
import { startUserCLI } from "./startUserCLI.js";


export function startTokenizer() {
  const tokens = new Tokenizer(test.lexicalGrammars2, test.stringToTokenize2);
  tokens.startTokenmatch();
  tokens.showTokenCollection();

  // startUserCLI(tokens.allCreatedTokens);

  // console.log( tokens.getActiveToken());
  // tokens.nextToken()
  // console.log( tokens.getActiveToken());
  // tokens.nextToken()
  // tokens.previousToken()
  // console.log( tokens.getActiveToken());

}
