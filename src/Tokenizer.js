/**
 * Tokenizer
 * 
 * @author Kaj Berg <kb223aw@student.lnu.se>
 * @version 1.0.2
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
    this._tokensCreatedCollection = [];
    this._activeTokenValue = 0;
    this.startTokenMatch();
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
   return this._tokensCreatedCollection;
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

_saveTokenToCollection(createTokenType, createTokenString){
  this.allCreatedTokens.push({
    tokenType: createTokenType,
    tokenValue:createTokenString  
  })
}

_removeCreatedTokenFromString(createTokenString){
  if(this.tokenizedString){
    this.tokenizedString = this.tokenizedString.slice(createTokenString.length);
  }
}

showTokenCollection(){
  console.log('--- Tokencollection --- \n', this.allCreatedTokens);
  console.log('--- End of Tokencollection ---');
}

_checkForErrors(tokenStringBeforeCreate){
  if(tokenStringBeforeCreate === this.tokenizedString.length){
    throw new LexicalError('Error creating tokens')
  }
}

_checkStringForOnlySpaces() {  
 if(this.tokenizedString.match(/\S/)){
return true;
}
return false;
}

_checkForLongestTokenMatch(grammar) {
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

_createTokens(){
  while (this.tokenizedString.length > 0) {
    let regexMatchedString = '';
    let createTokenString = '';
    let createTokenType = '';
    let tokenStringBeforeCreate = '';

    for(let i= 0;i < this.lexicalGrammarInfo.length;i++){
      this.removeSpace();
      regexMatchedString = this._checkForLongestTokenMatch(this.lexicalGrammarInfo[i]);
      if(regexMatchedString.length > createTokenString.length){
        createTokenString = regexMatchedString;
        createTokenType = this.lexicalGrammarInfo[i].tokenType;
      }
    }
    tokenStringBeforeCreate = this.tokenizedString.length;
    this._saveTokenToCollection(createTokenType, createTokenString);
    this._removeCreatedTokenFromString(createTokenString);
    this._checkForErrors(tokenStringBeforeCreate);
  } 
  this._saveTokenToCollection('END', '')
}

startTokenMatch(){
  const notOnlySpaces = this._checkStringForOnlySpaces()
  if(notOnlySpaces){
    this._createTokens();  
  } else {
    this._saveTokenToCollection('END', '')
  }
 }
}
