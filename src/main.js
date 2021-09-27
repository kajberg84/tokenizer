/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import {  startTokenizer } from "./startTokenizer.js";
import { LexicalError } from "./utility/errorHandling.js";
import * as grammar from "./utility/grammars.js"
import { createTokenString } from "./utility/stringToUseInTokenizer.js"


const startApplication = async () => {
  try {
    // Example code.
    const tokenizedCollection = startTokenizer(grammar.ExtendedArithmeticGrammar, createTokenString);
    tokenizedCollection.startTokenMatch();
    tokenizedCollection.showTokenCollection();
  } catch (err) {
    if (err instanceof LexicalError) {
      console.error(err.message)
    }
    console.error(err.message)
  }
}

startApplication()