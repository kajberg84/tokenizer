# Kaj Berg - Tokenizer

## Tokenizer - 1dv610 - Laboration 1

---

## main.js

  <span style="color:lightblue">@function</span>
  <span  style="color:#0041c2">  startApp()</span>  
  Starting point of the application.

---

## startTokenizer.js

  <span style="color:lightblue">@function</span><span  style="color:#0041c2">  startTokenizer</span>(LexicalGrammar, stringToTokenize)  
     @Returns instance of Tokenizer.

  @LexicalGrammar - lexicalGramars.  
  @stringToTokenize - String to creates tokens from.  

---------------

## startUserCLI.js

<span style="color:lightblue">@function</span> <span style="color:#0041c2">startUserCLI</span>(allTokens)  
@allTokens - tokenCollection
Creating a user Command Line interface.  

Using these inputs to change active token  
Forward = 1,  
Back = 2  
Back to first token = 3  
Close = press anything else  

---

## Tokenizer Class

<span style="color:green">Tokenizer</span>  
@ constructor(lexicalGrammars, stringToTokenize)  
@ lexicalGrammars - Object with all grammar  
@ stringToTokenize - string to creates token from.

    Exampel object for lexicalGrammars:
    {
    tokenType:"WORD",
    tokenRegex:/^[\w|åäöÅÄÖ]+/
    },  
    {
    tokenType:"DOT",
    tokenRegex:/^\./
    }

<span style="color:#0041c2">getActiveToken()</span>
shows active token

<span style="color:#0041c2">nextToken()</span>
Adding +1 to activeTokenValue

<span style="color:#0041c2">previousToken()</span>
Removing -1 from activeTokenValue

<span style="color:#0041c2">removeSpace()</span>
Triming string to tokenize

<span style="color:#0041c2">saveTokenToCollection</span>(createTokenType, createTokenString)  
Pushing arguments to an Collection array.

<span style="color:#0041c2">removeCreatedTokenFromString</span>(createTokenString)  
Removing recent created token from inserted string using method: "Slice".

<span style="color:#0041c2">showTokenCollection()</span>
Showing collection of all created tokens

#FORTSÄTTA MED checkRegexMatch

---


## Error Classes

LexicalError - extends Error.  
@ Throws Lexical error if token dont match grammar.

---