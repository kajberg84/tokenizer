/**
 * Grammars.
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

export const FloatIntegerGrammar =  [
  {
    tokenType: "FLOAT",
    tokenRegex: /^[.]|[0-9]/,
  },
  {
    tokenType: "INTEGER",
    tokenRegex: /\d/,
  },
];

export const ExtendedArithmeticGrammar = [
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
  {
    tokenType: "SUB",
    tokenRegex: /^[-]/  
  },  
  {
    tokenType: "DIV",
    tokenRegex: /^[/]/  
  },
  {
    tokenType: "leftPar",
    tokenRegex: /\(/  
  },
  {
    tokenType: "rightPar",
    tokenRegex: /\)/  
  },
  ]