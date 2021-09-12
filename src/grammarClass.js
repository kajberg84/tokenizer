export class grammarClass {
  constructor(type, string){
    this.type = type;
    this.string = string;
  }

  checkGrammarType(){
    console.log("type ", this.type, "string ", this.string);
  }

}