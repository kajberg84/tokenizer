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

startTokenmatch(){
   do {
     let tokenString = '';
     let createTokenString = '';
     let createTokenType = 'END';

     for(let i=0;i < this.lexicalGrammarInfo.length;i++){
      tokenString = this.checkForLongestTokenMatch(this.lexicalGrammarInfo[i])
      if(tokenString.length > createTokenString.length){
        createTokenString = tokenString
        createTokenType = this.lexicalGrammarInfo[i].tokenType
      }
     }

       this._tokenCollection.push({
         tokenType: createTokenType,
         tokenValue:createTokenString  
       })
       
        this.tokenizedString = this.tokenizedString.slice(createTokenString.length)
  } while (this.tokenizedString.length > 0);      
 }

}
