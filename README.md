# :memo: Kaj Berg - Tokenizer

## User Manual

1. Import startTokenizer from @kajberg/tokenizer.
2. First parameter: Collection of grammar.
3. Second parameter: Document to create tokens from(Type String).
4. Returns Instans of a tokenizer.
5. Use methods below for desired behavior.

### How to use it

```javascript
import { startTokenizer } from '@kajberg/tokenizer.'

const grammar = [
      {
      tokenType:"WORD",
      tokenRegex:/^[\w|åäöÅÄÖ]+/
      },  
      {
      tokenType:"DOT",
      tokenRegex:/^\./
      }
    ]

const tokenizer = startTokenizer(grammar, "Hello World.")
// Returns active Token.
tokenizer.getActiveToken();
// Go to next token and get active token.
tokenizer.nextToken();
tokenizer.getActiveToken();
// Get all created tokens.
tokenizer.allCreatedTokens();
```


## Methods for Tokenizer

<span style="color:lightblue">getActiveToken()</span>  
Returns active token.

<span style="color:lightblue">nextToken()</span>  
Switch to the next token.

<span style="color:lightblue">previousToken()</span>  
Switch to the previous token.

<span style="color:lightblue">allCreatedTokens()</span>  
Returns an array with all created tokens.

-----
