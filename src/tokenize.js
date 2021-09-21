/**
 * Funktion that creates an instance of a class and runs methods.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */
import { KBsTokenizer } from "./KBsTokenizer.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt();

let toggleState = 0;

export function tokenize(lexicalGrammars, stringToTokenize) {
  const tokens = new KBsTokenizer(lexicalGrammars, stringToTokenize);
  tokens.startTokenmatch();
  //  tokens.showTokenCollection();
  const allTokens = tokens.allCreatedTokens;
  console.log('Forward = 1, Back = 2, Start = 3, Close = everything else');
  console.log(`\n First token: `, allTokens[toggleState]);

  rl.on("line", function (line) {
    switch (line.trim()) {
      case "1":
        toggleState++;
        console.log(`\n Active token:`, allTokens[toggleState]);
        break;
      case "2":
        toggleState--;
        console.log(`\n Active token:`,allTokens[toggleState]);
        break;
        case "3":
            toggleState = 0;
            console.log(`\n Active token:`,allTokens[toggleState]);
            break;
      default:
        console.log("App Closed. Take Care !");
        process.exit(0);
    }
    rl.prompt();
  })
}
