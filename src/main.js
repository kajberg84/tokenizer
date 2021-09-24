/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import {  startTokenizer } from "./startTokenizer.js";
import { LexicalError } from "./utility/errorHandling.js";
import { startUserCLI } from "./utility/startUserCLI.js" 
import * as grammar from "./utility/grammars.js"
import * as string from "./utility/stringToUseInTokenizer.js"


const startApp = async () => {
  try {
    // Example code
    const tokenizedCollection = startTokenizer(grammar.ExtendedArithmeticGrammar, "3.14 * (5 + 3)");
    tokenizedCollection.startTokenmatch();

  } catch (err) {
    if (err instanceof LexicalError) {
      console.log("LexicalError");
      console.error(err.message)
    }
    console.error(err.message)
  }
}

startApp()