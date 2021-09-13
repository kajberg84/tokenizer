/**
 * The starting point of the application.
 *
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { KBsTokenizer } from "./kBsTokenizer.js";
import { checkProcessArgs, InputStringError } from "./utilities/errorHandling.js";
const startApp = async () => {
  try {
    checkProcessArgs()
    const token = new KBsTokenizer(process.argv.slice(2,3), process.argv.slice(3,4))
    token.writeToConsole()
  } catch (error) {
    console.log("Error in startup");
    console.error(error.message)
    if (error instanceof InputStringError) {
      process.exitCode = 30
      //Göra en egen exitcode. lägg till i readme
    }
  }
}

startApp()