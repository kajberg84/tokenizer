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
    this._array = [];
  }

  tokenArray(){
    return this._array;
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

 checkForBestTokenMatch(){
   const grammars = this.lexicalGrammarInfo;
    let tokenString = '';
    let createTokenString = '';
    let createTokenType = 'END';

      for(let i=0;i < grammars.length;i++){
        console.log("grammar: ", grammars[i].tokenRegex);
        for(let j=0; j < this.tokenizedString.length; j++){
          const letter = this.tokenizedString[j];
          if(letter.match(grammars[i].tokenRegex)){
            tokenString += letter;
            if(tokenString > createTokenString){
              createTokenString = tokenString;
              createTokenType = grammars[i].tokenType;
            }
          } else {
            break;
          }
        }
      }

      console.log("token to create:", createTokenString, "type: ",createTokenType );
        this._array.push({
          tokenType: createTokenType,
          tokenValue:createTokenString  
        })
    
       this.tokenizedString = this.tokenizedString.slice(createTokenString.length)

       console.log(this.tokenizedString);

   

 }

}
