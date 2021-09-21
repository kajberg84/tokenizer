/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import { tokenize } from "./tokenize.js";
import * as test from "./testCases.js"

const startApp = async () => {
  try {
    tokenize(test.lexicalGrammars, test.stringToTokenize)    
    // tokenize(test.lexicalGrammars2, test.stringToTokenize2)  
    // tokenize(test.lexicalGrammars3, test.stringToTokenize3)  
  } catch (error) {
    console.log("Error in startup");
    console.error(error)
  }
}

startApp()