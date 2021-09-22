/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


import {  startTokenizer } from "./startTokenizer.js";

import { LexicalError } from "./errorHandling.js";

const startApp = async () => {
  try {
    startTokenizer();
  } catch (err) {
    if (err instanceof LexicalError) {
      console.log("LexicalError");
      console.error(err.message)
    }
    console.error(err.message)
  }
}

startApp()