# Kaj Berg - Tokenizer

## Tokenizer - 1dv610 - Laboration 1

## User Manual
1. Open terminal.
2. git clone xxx.
3. cd /l1
3. Write "Npm install" in terminal.
4. Open grammars.js
5. Add wanted grammar(s). (see example below)
6. Open stringToUseInTokenizer.js
7. Add wanted string to create token(s) from.
8. Open main.js.
9. startTokenizer(grammar.createdGrammarfrom#5, createTokenString). Returns an instance of Class Tokenizer. (See below for arguments).
10. Add methods to created instance(See below what kind of methods).

---

11. If you want to try out "CLI app - Beta" you need to write - import { startUserCLI } from "./utility/startUserCLI.js" in main.js.  
12. Follow #1-9 then startUserCLI(tokenizedCollection)

---

## grammars.js

### Example grammar':'

    const WordAndDotGrammar = [
      {
      tokenType:"WORD",
      tokenRegex:/^[\w|åäöÅÄÖ]+/
      },  
      {
      tokenType:"DOT",
      tokenRegex:/^\./
      }
    ]

---

## main.js

  <span style="color:lightblue">startTokenizer</span>(LexicalGrammar, stringToTokenize)  
     @Returns instance of Tokenizer.

---------------

## Methods for classinstance

<span style="color:lightblue">getActiveToken()</span>  
Returns active token.

<span style="color:lightblue">nextToken()</span>  
Switch to the next token.

<span style="color:lightblue">previousToken()</span>  
Switch to the previous token.

<span style="color:lightblue">showTokenCollection()</span>  
Showing a collection of all created tokens.

-----

### Extra Cli:

example: instans.startUserCLI()

<span style="color:lightblue">@function startUserCLI</span>(allTokens)  
@allTokens - tokenCollection
Creating a user Command Line interface.  

Using these inputs to change active token  
Forward = 1,  
Back = 2  
Back to first token = 3  
Close = press anything else  

---