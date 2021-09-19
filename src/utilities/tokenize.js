// vi tar in lexicalgrammars som har olika regex.
//string.
export function tokenize(lexicalGrammars, stringToTokenize) {
  stringToTokenize.trim();



    //köra så länge det finns sträng kvar   do while?
    do {
      //köra igen alla lexikal grammars. och ska kolla mot tecknet sen klippa ut det längsta
      let returnedToken = getLongestToken(lexicalGrammars, stringToTokenize)
      //klippa ut längden från det returnerade tokenet först ur string to tokenize.
      console.log("strängen som är kvar", stringToTokenize);
} while (stringToTokenize.length);
}





function getLongestToken (lexicalGrammars, stringToTokenize) {
  let regex = lexicalGrammars[0].tokenreg; // SKA EJ HÅRDKODAS men kör bara en nu

  let longestTokenMatched ='';
  let matchedTokenType ='';
  let tokenArray = [];

  for(let i = 0; i < stringToTokenize; i++){
    let letter = stringToTokenize[i];
    if (letter.match(regex)) {
      //kolla nästa om den också matchar. osv
      matchedTokenType = lexicalGrammars[0];
      longestTokenMatched+= letter;
    } 
    else {
      tokenArray[0] = [matchedTokenType, longestTokenMatched]
      return tokenArray
    }

  }
}