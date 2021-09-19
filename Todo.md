
reglerna för hela strängen att tokenizera

[
  {
  tokenType:"WORD",
  tokenreg:"/^[\w|åäöÅÄÖ]+/",
  },

  {
  tokenType:"DOT",
  tokenreg:"/^\./",
  }
]

ska ta in dessa regler och en sträng.

strängen ska köras matchas och sen splices.

