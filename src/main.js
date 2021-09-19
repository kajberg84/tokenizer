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

const lexicalGrammars2 = [
  {
    tokenType:"FLOAT",
    tokenRegex:/^[0-9]+\.([0-9])+/ 
  },
  {
    tokenType: "INTEGER",
    tokenRegex: /^[0-9]+/
  }
]

const stringToTokenize = "Kossa.hrhr."
const stringToTokenize2 = "3.14 5"

const startApp = async () => {
  try {
    tokenize(lexicalGrammars2, stringToTokenize2)    
  } catch (error) {
    console.log("Error in startup");
    console.error(error)
  }
}

startApp()