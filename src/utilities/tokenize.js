// vi tar in lexicalgrammars som har olika regex.
//string.
export function tokenize(lexicalGrammars, stringToTokenize) {
  stringToTokenize.trim();
  const allTokens = [];
    do {
      const returnedToken = getLongestToken(lexicalGrammars, stringToTokenize)
      // när token har returnerats klipp av strängen med den längden.
      console.log("strängen som är kvar", stringToTokenize);
} while (stringToTokenize.length);
}


function getLongestToken (lexicalGrammars, stringToTokenize) {
  let regex = lexicalGrammars[0].tokenreg; // SKA EJ HÅRDKODAS men kör bara en nu

  for(let i = 0; i < stringToTokenize; i++){
    let letter = stringToTokenize[i];
    if (letter.match(regex)) {
      //om den matcher fortsätt att kolla nästa i turorning.
      //lägg dessa i en variabel som sparas.


    } 
    else {
            // När den inte matchar längre => 
            //ska den byta lexikal grammatik
            // KÖRA igen och matcha.. 
            // OM den är längre. skriv över variabeln.
            // NÄR ALLA KOLLATS returneran längsta token.
    }

  }
}