/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import {  startTokenizer } from "./startTokenizer.js";
import { LexicalError } from "./errorHandling.js";
import { startUserCLI } from "./startUserCLI.js";

import * as test from "./testCases.js"

const startApp = async () => {
  try {
    const tokenizedCollection = startTokenizer(test.ArithmeticGrammar, test.testCase14);

    tokenizedCollection.startTokenmatch();
    tokenizedCollection.showTokenCollection();

  // tokenizedCollection(tokens.allCreatedTokens);
  // console.log( tokenizedCollection.getActiveToken());
  //  tokenizedCollection.nextToken()
  //  console.log( tokenizedCollection.getActiveToken());
  // tokenizedCollection.nextToken()

  // tokenizedCollection.previousToken()
  // console.log( tokenizedCollection.getActiveToken());

  } catch (err) {
    if (err instanceof LexicalError) {
      console.log("LexicalError");
      console.error(err.message)
    }
    console.error(err.message)
  }
}

startApp()