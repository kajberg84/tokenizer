/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import { startTokenizer } from "./startTokenizer.js";
import { LexicalError } from "./utility/errorHandling.js";

const stringToCreateTokensFrom = "aa.b*Ä";
const grammarsForCreatingTokens = [
  {
    tokenType: "WORD",
    tokenRegex: /^[\w|åäöÅÄÖ]+/,
  },
  {
    tokenType: "DOT",
    tokenRegex: /^\./,
  },
];

/**
 * Starting the tokenizer application.
 *
 * @param {Object[]} WordAndDotGrammar - Array of grammars.
 * @param {*} createTokenString
 * @return {Object[]} - Array of tokens.
 */
const startApplication = async (tokenizerGrammar, createTokenString) => {  
  const tokenizerInstance = startTokenizer(tokenizerGrammar, createTokenString);  
  try {
    tokenizerInstance.startTokenMatch();
    console.log(tokenizerInstance.allCreatedTokens);
    return tokenizerInstance.allcreatedTokens;
  } catch (err) {
    if (err instanceof LexicalError) {
      console.error(err.message);
      console.log(tokenizerInstance.allCreatedTokens);
      return tokenizerInstance.allcreatedTokens;
    }
    console.error(err.message);
  }
};

startApplication(grammarsForCreatingTokens, stringToCreateTokensFrom);