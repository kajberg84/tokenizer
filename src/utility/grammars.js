/**
 * Grammars for the tokenizer.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

// EXAMPLE GRAMMARS
export  const WordAndDotGrammar = [
  {
  tokenType:"WORD",
  tokenRegex:/^[\w|åäöÅÄÖ]+/
  },  
  {
  tokenType:"DOT",
  tokenRegex:/^\./
  }
]

export const ArithmeticGrammar = [
  {
    tokenType:"NUMBER",
    tokenRegex:/\d|\./
  },
{
  tokenType: "ADD",
  tokenRegex: /^[+]/ 
},
{
  tokenType: "MUL",
  tokenRegex: /^[*]/  
},
]
