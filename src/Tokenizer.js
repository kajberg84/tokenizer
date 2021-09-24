/**
 * Tokenizer
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.0
 */

import { LexicalError } from './utility/errorHandling.js';

/**
 *Creating an new Tokenizer object.
 *
 * @export {class} Tokenizer
 * @throws {LexicalError} - Throws error if no regex matches string.
 * @class Tokenizer
 */
export class Tokenizer {
  constructor(lexicalGrammars, stringToTokenize) {
    this._lexicalGrammars = lexicalGrammars;
    this._stringToTokenize = stringToTokenize;
    this._tokenCollection = [];
    this._activeTokenValue = 0;
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
 
 get allCreatedTokens(){
   return this._tokenCollection;
  }

getActiveToken(){
  const activeToken = this.allCreatedTokens[this._activeTokenValue]
  return activeToken
}

nextToken(){
  if(this._activeTokenValue >= (this.allCreatedTokens.length -1)){
    return
  }
  this._activeTokenValue++ ;
}

previousToken(){
  if(this._activeTokenValue <= 0){
    return
  }
  this._activeTokenValue-- ;
}

removeSpace(){
    this.tokenizedString = this.tokenizedString.trim()
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
  console.log('--- Tokencollection --- \n', this.allCreatedTokens);
  console.log('--- End of Tokencollection ---');
}

checkForErrors(tokenStringBeforeCreate){
  if(tokenStringBeforeCreate === this.tokenizedString.length){
    throw new LexicalError('No lexical element matches')
  }
}

checkForOnlySpaces() {  
 if(this.tokenizedString.match(/\S/)){
return true;
}
return false;
}

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

createTokens(){
  while (this.tokenizedString.length > 0) {
    let regexMatchedString = '';
    let createTokenString = '';
    let createTokenType = '';
    let tokenStringBeforeCreate = '';

    for(let i= 0;i < this.lexicalGrammarInfo.length;i++){
      this.removeSpace();
      regexMatchedString = this.checkForLongestTokenMatch(this.lexicalGrammarInfo[i]);
      if(regexMatchedString.length > createTokenString.length){
        createTokenString = regexMatchedString;
        createTokenType = this.lexicalGrammarInfo[i].tokenType;
      }
    }
    tokenStringBeforeCreate = this.tokenizedString.length;
    this.saveTokenToCollection(createTokenType, createTokenString);
    this.removeCreatedTokenFromString(createTokenString);
    this.checkForErrors(tokenStringBeforeCreate);
  } 
  this.saveTokenToCollection('END', '')
}

startTokenmatch(){
  const notOnlySpaces = this.checkForOnlySpaces()
  if(notOnlySpaces){
    this.createTokens();  
  } else {
    this.saveTokenToCollection('END', '')
  }
 }
}
