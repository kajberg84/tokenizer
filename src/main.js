//main.js

/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import { tokenize } from "./tokenize.js";

const lexicalGrammars = [
    {
    tokenType:"WORD",
    tokenRegex:/^[\w|åäöÅÄÖ]+/
    },  
    {
    tokenType:"DOT",
    tokenRegex:/^\./
    }
]

const stringToTokenize = "Hej. Kaj."

const startApp = async () => {
  try {
    tokenize(lexicalGrammars, stringToTokenize)
  } catch (error) {
    console.log("Error in startup");
    console.error(error)
  }
}

startApp()