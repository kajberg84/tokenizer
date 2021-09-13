# KBs Tokenizer

1. Start the tokenizer by running npm start X Y.
X = grammarword(see below)
Y = String that you want to tokenize.




// wordAndDotgrammar  /^[\w|åäöÅÄÖ]+/
// bara word o dot end

// arithmeticgrammar /^[0-9]+(\.([0-9])+)?/ 
// number add multi end

// MaximalMunchGrammar  /^[0-9]+\.[0-9]+/  
// ska kolla vilken av de båda strängarna som är längst. float eller integer grammar. sen använda den som är längst
//  Om någon ej stämmer så ska den slänga error, lexikalfel, "no element to match this input = " hejsan""

// ExclamationGrammar ska utropstecken finnas med