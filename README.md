# Kaj Berg - Tokenizer

## Tokenizer - 1dv610 - Laboration 1

## User Manual
1. Npm install.
2. Go to Inside StartTokeniz.js 
3. startTokenizer(LexicalGrammar, stringToTokenize) Returns an instans of Class Tokenizer. (See below for arguments).
4. Add methods to created instance.(See below).

## startTokenizer.js

  <span style="color:lightblue">@function startTokenizer</span>(LexicalGrammar, stringToTokenize)  
     @Returns instance of Tokenizer.

  @LexicalGrammar - lexicalGramars.  
  @stringToTokenize - String to creates tokens from.  

---------------

<span style="color:lightblue">getActiveToken()</span>  
Returns active token.

<span style="color:lightblue">nextToken()</span>  
Switch to the next token.

<span style="color:lightblue">previousToken()</span>  
Switch to the previous token.

<span style="color:lightblue">showTokenCollection()</span>  
Showing a collection of all created tokens.

-----
# Extra: Cli 
exampel: instans.startUserCLI()

<span style="color:lightblue">@function startUserCLI</span>(allTokens)  
@allTokens - tokenCollection
Creating a user Command Line interface.  

Using these inputs to change active token  
Forward = 1,  
Back = 2  
Back to first token = 3  
Close = press anything else  

---