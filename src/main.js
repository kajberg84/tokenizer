//main.js

/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
// import { KBsTokenizer } from "./kBsTokenizer.js";
import { InputStringError } from "./utilities/errorHandling.js";
import { tokenize } from "./utilities/tokenize.js";

const lexicalGrammars = [
    {
    tokenType:"WORD",
    tokenreg:/^[\w|åäöÅÄÖ]+/
    },  
    {
    tokenType:"DOT",
    tokenreg:/^\./
    }
]

const stringToTokenize = "Meningen är hej.Kaj."

const startApp = async () => {
  try {
const tokenizedString = tokenize(lexicalGrammars, stringToTokenize)
console.log("alla tokens:", tokenizedString);

  } catch (error) {
    console.log("Error in startup");
    console.error(error)

    if (error instanceof InputStringError) {
      process.exitCode = 30
      //Göra en egen exitcode. lägg till i readme
    }
  }
}

startApp()