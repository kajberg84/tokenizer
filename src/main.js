/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

import { checkProcessArgs } from "./utilities/handleProcArgs.js";
import { grammarClass } from "./grammarClass.js";
const startApp = async () => {
  try {
    checkProcessArgs()
    const inputFromArgv = new grammarClass(process.argv.slice(2,3), process.argv.slice(3,4))
    console.log("argv", inputFromArgv);
    console.log("funcktion: ", inputFromArgv.checkGrammarType());
  } catch (error) {
    console.log("Error in startup");
    console.error(error.message)
  }
}

startApp()