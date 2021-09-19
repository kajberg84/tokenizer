/**
 * Creating an new Tokenizer object.
 *
 * @function writeToConsole -
 * @class KBsTokenizer
 */
export class KBsTokenizer {
  constructor(lexicalGrammars, stringToTokenize) {
    this._lexicalGrammars = lexicalGrammars;
    this._stringToTokenize = stringToTokenize;
  }

  printOutTokens(){
    console.log("grammars ", this._lexicalGrammars);
    console.log("string to tokenize ",this._stringToTokenize);
  }

 get tokenizedString(){
  return this._stringToTokenize;
 }

 set stringToTokenize(value){
   this._stringToTokenize = value;
 }

 get lexicalGrammarInfo(){
  return this._lexicalGrammars;
 }

 checkForBestTokenMatch(){
   const grammars = this.lexicalGrammarInfo
   console.log(grammars);
   // check for first tokenreq
   for(let i=0;i < grammars.length;i++){
    console.log("kossa", grammars[i]);
   }
 }

}

/**
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
 */