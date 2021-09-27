/**
 * Test grammars.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */


 export const WordAndDotGrammar = [
  {
    tokenType: "WORD",
    tokenRegex: /^[\w|åäöÅÄÖ]+/,
  },
  {
    tokenType: "DOT",
    tokenRegex: /^\./,
  },
];

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
    tokenType: "LEFTPAR",
    tokenRegex: /\(/  
  },
  {
    tokenType: "RIGHTPAR",
    tokenRegex: /\)/  
  },
  ]

  export const specifikLetterGrammar = [
    {
      tokenType: "LetterA",
      tokenRegex: /^[Aa]/ 
    },
    {
      tokenType: "LetterB",
      tokenRegex: /^[Bb]/ 
    },
    {
      tokenType: "LetterC",
      tokenRegex: /^[Cc]/ 
    },
  ]

