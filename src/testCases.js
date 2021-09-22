/**
 * TestCases.
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

export  const lexicalGrammars = [
  {
  tokenType:"WORD",
  tokenRegex:/^[\w|åäöÅÄÖ]+/
  },  
  {
  tokenType:"DOT",
  tokenRegex:/^\./
  }
]

export const lexicalGrammars2 = [
{
  tokenType:"FLOAT",
  tokenRegex: /^.*[0-9]|./
},
{
  tokenType: "INTEGER",
  tokenRegex: /^[0-9]+/
}
]

export const lexicalGrammars3 = [
{
  tokenType:"NUMBER",
  tokenRegex:/^[0-9]+(\.([0-9])+)?/
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

export const stringToTokenize =  "     Hej Daniel..... Ha det så bra."
export const stringToTokenize2 = "3.14 5"
export const stringToTokenize3 = "3 + 54 * 4"
export const stringToCreateError3 = "3 + 54 aaa"
export const space =  " "
