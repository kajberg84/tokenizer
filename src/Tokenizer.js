/**
 * Tokenizer
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

import { LexicalError } from "./errorHandling.js";

/**
 * Creating an new Tokenizer object.
 *
 * @throws {LexicalError} - Throws error if no regex matches string.
 * @class KBsTokenizer
 */
export class Tokenizer {
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

removeSpace(){
  this.tokenizedString = this.tokenizedString.trim()
}

get allCreatedTokens(){
  return this._tokenCollection;
 }

saveTokenToCollection(createTokenType, createTokenString){
  this.allCreatedTokens.push({
    tokenType: createTokenType,
    tokenValue:createTokenString  
  })
}

removeCreatedTokenFromString(createTokenString){
  if(this.tokenizedString){
    this.tokenizedString = this.tokenizedString.slice(createTokenString.length);
  }
}

showTokenCollection(){
  console.log("--- Tokencollection --- \n", this.allCreatedTokens);
  console.log("--- End of Tokencollection ---");
}

checkForNoRegexMatch(stringlengthState){
  if(stringlengthState === this.tokenizedString.length){
    throw new LexicalError("No lexical element matches",this.tokenizedString )
  }
}



// ADD USER UI HERE


checkForLongestTokenMatch(grammar) {
  let returnTokenString = '';
  for(let j=0; j < this.tokenizedString.length; j++){
    const letterToMatch = this.tokenizedString[j];
    if(letterToMatch.match(grammar.tokenRegex)){
      returnTokenString += letterToMatch;
    } else {
      break;
    }
  }
  return returnTokenString;
}

startTokenmatch(){
   do {

    let regexMatchedString = '';
    let createTokenString = '';
    let createTokenType = '';
    let stringlengthState = '';

    for(let i= 0;i < this.lexicalGrammarInfo.length;i++){
     this.removeSpace();
     regexMatchedString = this.checkForLongestTokenMatch(this.lexicalGrammarInfo[i]);
     if(regexMatchedString.length > createTokenString.length){
       createTokenString = regexMatchedString;
       createTokenType = this.lexicalGrammarInfo[i].tokenType;
     }
    }

   stringlengthState = this.tokenizedString.length;

   this.saveTokenToCollection(createTokenType, createTokenString);
   this.removeCreatedTokenFromString(createTokenString);
   this.checkForNoRegexMatch(stringlengthState);

  } while (this.tokenizedString.length > 0); 

  this.saveTokenToCollection("END", "")
 }

}
