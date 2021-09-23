/**
 * TestCases.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

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

export const FloatNumGrammar = [
  {
    tokenType:"FLOAT",
    tokenRegex: /^.*[0-9]|./
  },
  {
    tokenType: "INTEGER",
    tokenRegex: /\d/
  }
  ]

export const testCase1 =  "a"
export const testCase2 =  "a aa"
export const testCase3 =  "a.b"
export const testCase4 =  "a.b"
export const testCase5 =  "aa. b"
export const testCase6 =  "a.b"
export const testCase7 =  ""
export const testCase8 =  " "
export const testCase9 =  "a"
export const testCase10 =  "a"
export const testCase11 =  "!"
//arithmetic
export const testCase12 =  "3"
export const testCase13 =  "3.14"
export const testCase14 =  "3 + 54 * 4"
export const testCase15 =  "3+5 # 4"
export const testCase16 =  "3.0+54.1 + 4.2"
