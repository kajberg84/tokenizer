import readline from "readline";

const readCurrentLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readCurrentLine.prompt();

let activeLine = 0;

export function startUserCLI(allTokens){
  console.log('Forward = 1, Back = 2, Back to first token = 3, Close = everything else');
  console.log(`\n First token: `, allTokens[activeLine]);

  readCurrentLine.on("line", function (line) {
    switch (line.trim()) {
      case "1":
        console.log(`\n Active token:`, allTokens[++activeLine]);
        break;
      case "2":
        console.log(`\n Active token:`,allTokens[--activeLine]);
        break;
        case "3":
            activeLine = 0;
            console.log(`\n Active token:`,allTokens[activeLine]);
            break;
      default:
        console.log("App Closed. Take Care !");
        process.exit(0);
    }
    readCurrentLine.prompt();
  })
}