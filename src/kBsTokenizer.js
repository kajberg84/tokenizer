/**
 * kBsTokenizer
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

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
    this._tokenCollection = [];
  }

 get tokenizedString(){
  return this._stringToTokenize;
 }

 set tokenizedString(value){
   this._stringToTokenize = value;
 }

 get lexicalGrammarInfo(){
  return this._lexicalGrammars;
 }

 tokenArray(){
  return this._tokenCollection;
}

checkForLongestTokenMatch(grammar) {
  let tokenString = '';
  for(let j=0; j < this.tokenizedString.length; j++){
    const letter = this.tokenizedString[j];
    if(letter.match(grammar.tokenRegex)){
      tokenString += letter;
    } else {
      break;
    }
  }
  return tokenString;
}

removeSpace(){
  if(this.tokenizedString[0] === ' '){
    this.tokenizedString = this.tokenizedString.slice(1)
  }
}

saveTokenToCollection(createTokenType, createTokenString){
  this._tokenCollection.push({
    tokenType: createTokenType,
    tokenValue:createTokenString  
  })
}

removeCreatedTokenFromString(createTokenString){
  this.tokenizedString = this.tokenizedString.slice(createTokenString.length);
}

showTokenCollection(){
  console.log("--- Tokencollection --- \n", this._tokenCollection);
  console.log("--- End of Tokencollection ---");
}

startTokenmatch(){
   do {
     let longestTokenString = '';
     let createTokenString = '';
     let createTokenType = '';

     for(let i=0;i < this.lexicalGrammarInfo.length;i++){
      this.removeSpace();
      longestTokenString = this.checkForLongestTokenMatch(this.lexicalGrammarInfo[i]);

      if(longestTokenString.length > createTokenString.length){
        createTokenString = longestTokenString;
        createTokenType = this.lexicalGrammarInfo[i].tokenType;
      }
     }

    this.saveTokenToCollection(createTokenType, createTokenString);
    this.removeCreatedTokenFromString(createTokenString);

  } while (this.tokenizedString.length > 0);      
 }

}
