/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import {  startTokenizer } from "./startTokenizer.js";
import * as test from "./testCases.js"
import { LexicalError } from "./errorHandling.js";

const startApp = async () => {
  try {
    // startTokenizer(test.lexicalGrammars, test.stringToTokenize)    
    // startTokenizer(test.lexicalGrammars3, test.stringToTokenize3)  
    
    startTokenizer(test.lexicalGrammars2, test.stringToTokenize2)  
    // startTokenizer(test.lexicalGrammars3, test.stringToCreateError3)  
    // startTokenizer(test.lexicalGrammars1, test.space)  

  } catch (err) {
    if (err instanceof LexicalError) {
      console.log("LexicalError");
      console.error(err.message)
    }
    console.error(err.message)
  }
}

startApp()