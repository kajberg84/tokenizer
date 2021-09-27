# Mall för inlämning laboration 1, 1dv610

## Checklista

  - [x] I min tokeniserare finns inga tokentyper eller reg-exp. Dessa finns i mitt testprojekt eftersom de skapas utav användaren.
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt, det bör fungera :) )
  - [x] De enda statiska metoder eller funktioner utanför klasser som jag har är för att starta upp min testapplikation ex main(java).
  - [x] De enda bibliotek och färdiga klasser som används är sådana som måste användas (eller som används för att testa modulen).

## Egenskattning och mål

  - [x] Alla testfall fungerar
  - [x] Koden är förberedd på Återanvändning
  - [x] All kod samt historik finns i git 
  - [x] Kodkvaliterskraven är ifyllda
  - [x] Reflektion är skriven
  - [x] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
  - [x] Samtliga testfall är skrivna
  - [x] Egna testfall för Maximal munch och kantfall
   - [x] Testfall är automatiserade
  - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
  - [x] Kodkvalitetskraven är varierade
  - [x] Jag eftersträvar med denna inlämning högsta betyg (A)

## Återanvändning

Enkla instruktioner som står överst i README.md.
Lättförstålig Readme på var användaren ska lägga in sin gramatik och sträng att skapa tokens från.
Användaren kommer skriva in de metoder denne vill använda(Finns i Readme).  
Tänkte köra ett NPM paket men jag han inte inom tidsramen(läs reflektion).

Från README: 

---------------

## Methods for classinstance

<span style="color:lightblue">getActiveToken()</span>  
Returns active token.

<span style="color:lightblue">nextToken()</span>  
Switch to the next token.

<span style="color:lightblue">previousToken()</span>  
Switch to the previous token.

<span style="color:lightblue">showTokenCollection()</span>  
Showing a collection of all created tokens.

-----

### Extra Cli

example: instans.startUserCLI()

<span style="color:lightblue">@function startUserCLI</span>(allTokens)  
@allTokens - tokenCollection
Creating a user Command Line interface.  

Using these inputs to change active token  
Forward = 1,  
Back = 2  
Back to first token = 3  
Close = press anything else  

---

// Slut Readme

## Beskrivning av min kod

Funktioner:
StartApp() - Startar upp applikationen.
startTokenizer(arrayOfLexicalGrammar, stringToCreateTokensFrom)- returnerar en array av tokens.

    Metoder:  
    getActiveToken() Returnerar aktivt token.  
    nextToken() Byter till nästa token.  
    previousToken() Byter till föregående token.  
    showTokenCollection() Visar alla skapade tokens.  

## Hur jag testat

Först testade själv tills jag insåg att det tog för lång tid. 
Har använt cypress tidigare men det är end to end så fick kolla lite tutorials på mocha chai.
Så Automatiska enhetstester med hjälp av mocha chai. Tog de fallen so mfanns i beskrivningen och la till några extra som jag tyckte passade.

### Testfall

Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall.

| Namn      | Grammatik | Sträng | Sekvens | Förväntat Aktivt Token | PASS/FAIL |
| --------- | --------- | ------ | ------- | ------------ | --------- |
|    TC1       |     WordAndDotGrammar      |    “a”    |   []      |     WORD(“a”)         |  ✅      |
|    TC2       |     WordAndDotGrammar      |    “a aa”    |   [>]      |     WORD(“aa”)         |  ✅      |
|    TC3       |     WordAndDotGrammar      |    “a.b”    |   [>]      |     DOT(“.”)         |  ✅      |
|    TC4       |     WordAndDotGrammar      |    “a.b”    |   [>>]      |     **WORD(“b”)**         |  ✅      |
|    TC5       |     WordAndDotGrammar      |    “aa. b”    |   **[>>]**     |     WORD(“b”)         | ✅      |
|    TC6       |     WordAndDotGrammar      |    “a .b”    |   [>><]      |     DOT(“.”)         | ✅      |
|    TC7       |     WordAndDotGrammar      |    “”   |   []      |     END         |  ✅      |
|    TC8       |     WordAndDotGrammar      |    “ ”    |   []      |     **END**         |  ✅      |
|    TC9       |     WordAndDotGrammar      |    “a”    |   **[>]**      |     END         |  ✅      |
|    TC10       |     WordAndDotGrammar      |    “a”    |   [<]      |     **WORD(“a”)**         | ✅      |
|    TC11       |     WordAndDotGrammar      |    “!”    |   []      |     **LexicalError**         |  ✅      |
|    TC12       |     WordAndDotGrammar      |    “3”    |   []      |     NUMBER(“3”)         | ✅      |
|    TC13       |     ArithmeticGrammar      |    “3.14”    |   []      |     NUMBER(“3.14”)         | ✅      |
|    TC14       |     ArithmeticGrammar      |    “3 + 54 * 4”    |   [>>>]      |     MUL(“*”)         |  ✅      |
|    TC15       |     ArithmeticGrammar      |    “3+5 # 4”    |   ---      |     LexicalError         |  ✅      |
|    TC16       |     ArithmeticGrammar      |    “3.0+54.1     + 4.2”    |   [><>>>]      |     WORD(“a”)         |  ✅     |

---

### Testfall för högre betyg

| Namn      | Grammatik | Sträng | Sekvens | Förväntat Aktivt Token | PASS/FAIL |
| --------- | --------- | ------ | ------- | ------------ | --------- |
|           |           |        |         |              |           |
|    TC17       |     ExtendedArithmeticGrammar      |    “3.14 * (5 + 3)”    |   Array    |     length = 8         | ✅      |
|    TC18       |     ExtendedArithmeticGrammar      |    “3.14 * (5 + 3)”    |   [>>]      |     LEFTPAR(“ ( ”)         | ✅      |
|    TC19       |     ExtendedArithmeticGrammar      |    “3.14 * (5 + 3)”    |   [>>>>>>]      |      RIGHTPAR(“ ) ”)          |  ✅      |
|    TC20       |     ExtendedArithmeticGrammar      |    “3.14 * (5 + 3)”    |   [<]      |     NUMBER(“3.14”)         |  ✅      |
|    TC21       |     ExtendedArithmeticGrammar      |    “3+5 # 4”    |   ---     |     LexicalError        |  ✅     |
|    TC22       |     ExtendedArithmeticGrammar      |    “3 / (2 - 1)”    |   [>>>>]      |     DIV(“/”)         |  ✅      |
|    TC23       |     ExtendedArithmeticGrammar      |    “3 / (2 - 1)”    |   [><>>>]      |     SUB(“-”)         |  ✅     |
|    TC24       |     ExtendedArithmeticGrammar      |    “3 / (2 - 1)”    |   [<]      |     NUMBER(“3”)         |  ✅      |
|    TC25       |     SpecifikLetterGrammar      |    “AaabBbccC”    |   []    |     LetterA(“Aaa”)         | ✅      |
|    TC26       |     SpecifikLetterGrammar      |    “AaabBbccC”    |   [>]    |     LetterB(“bBb”)         | ✅      |
|    TC27       |     SpecifikLetterGrammar      |    “AaabBbccC”    |   [>>]    |     LetterC(“ccC”)         | ✅      |

### Testkommentar

Just nu skapar mitt testfall på TC15, TC21 lexikalfel.
Många tycker olika här men inget svårt att ändra i koden om man vill ha ut tidigare tokens. Så jag körde på att slänga lexikalfel.

## Kodkvalitetskrav

Några av de regler som jag använt mig utav är.

**Use Revealing Names** Ex: createTokens, nextToken, checkForOnlySpaces.  
**Avoid Disinformation & Use Pronouncable names** - Försökte tänkte extra på detta.  
**Use Pronouncable names** - Försökt tänkte extra på detta.  
**MethodNames should have prefix** - EX: showTokenCollection, saveTokenToCollection, removeCreatedTokenFromString, createTokenType.  
**Dont Pun** - Ex: alltid check om man ska kolla upp något. create vid skapande. show om man ska visa något. Så använder samma verb om den gjorde dylika saker.

Functions:  
**Do one thing** - det gör de flesta.  
**One level of nesting** - Tog med en nypa sant. Höll mig till max två(fast boken säger "ett". Dock "if/else" satser gillar jag istället för if och sen bara return.) I ett fall har jag tre stycken nesting. "While" som har en "for" som har en "if" i sig. Jag skulle kunna bryta ut if satsen men enligt min mening så kommer det inte bli enklare att läsa. Se: "createTokens()"  

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| startApplication. Denna som startar upp applikationen. |  Hade faktiskt **KBsTokenizer** först vilket inte sa mycket för andra. Sen läste jag boken och insåg att KB som står för "Kaj Berg" inte är så givande. Boken lärde mig **Avoid Disinformation & Use Pronouncable names** |
| stringToTokenize. Strängen som ska tokenizeras. | Jag tänkte från början ha "stringToCreateTokensFrom" men kändes lite väl långt och eftersom detta är en tokenizerare så hoppades jag på att den som ska använda förstod detta. |
| _tokensCreatedCollection. Här som alla skapade tokens lagras. | Bra namn och använder mig av **revealing names**.  |

### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|  getActiveToken(). Hämtar aktivt token   |  Använder avslöjande namn och nöjd med det genom hela programmet.                                           |
|  nextToken() & previousToken(). Byter aktivt token.   |  se raden ovan.   |
|  _saveTokenToCollection(). Sparar token till kollektionen av skapade tokens | Nu i efterhand så skulle jag kanske kunna haft detta namn _saveCreatedTokenToCollection för att förtydliga.  |
|  _removeCreatedTokenFromString(). Tar bort den skapade tokens strängs längd från input strängen | Tänkte ett tag på denna och kom inte på så mycket bättre namn och och gör det inte nu heller(kl 22). Något känns ej helt rätt så skulle vilja ha en liten **feedback** / tips på detta namn.|
|  _checkStringForOnlySpaces(). Kollar strängen om den bara har mellanslag.   |   Lite kluven nu kände jag då jag läste den igen ett par gånger för kanske borde ha ett annat avslöjande namn. Ex: _checkIfStringContainsOnlySpaces. Gärna en **feedback** här med sen.

## Laborationsreflektion

Jag har lärt mig väldigt mycket av denna laboration(och kurs hittills). Efter jag gjorde denna så känner jag att jag vill gå tillbaka till mina tidigare programkoder och ändra om namnen och ta bort mycket kommentarer. Tidigare professorer har inte riktigt sett saker på samma sätt som nu och jag gillar detta sätt. Kommer alltid fortsätta såhär om nu inte något framtida företag säger annorlunda.
Det svåraste har varit att komma på **avslöjande namn** och **undvika dissinformation** men när man stannar upp och tänker en sekund extra och känner efter hur det låter så blir det hyffsat.
Jag har alltid försök använda **ett ord per koncept** då jag tyckte det låter bäst men har väl tidigare ibland använt mig av **Söta namn** men har slutat efter detta. Senaste intervjun av Emil stärkte mycket som Daniel Toll har försökt att få oss att förstå. De båda har samma mentalitet till kodning vilket går lite emot det vi tidigare har lärt oss. Jag gillar detta mycket mer med bra namngivelser och mindre radkommentarer.

Boken säger **Gör en sak** på funktioner vilket jag har skrivit ovan lite om men detta tycker jag gör att man kan få ett helt hav av funktioner istället vilket jag tycker kan göra koden lite svårare att läsa då man måste kolla hit och dit. 
Samma här har jag lärt mig mycket med hur jag ska struktuerar upp mina namngivelser. Det ger ett skönare sätt att läsa koden om man hela tiden kan hänga med i namnen än att behöva kolla upp funktionens docs eller dylikt för att förstå vad den ska göra.
Jag testade lite olika namn under tidens gång vilket boken också förespråkar i kapitlet om  **använda beskrivande namn**.

Nu skrev jag detta i javaScript fast jag vet att jag hade gjort det bättre i Java då det är ett mera OOP språk. Jag ville försöka med javaScript och tycker jag fick till det. Suttit ganska mycket med uppgiften och jag valde från början att göra en klass som heter Tokenizer. Jag reflekterade över att jag skulle kunna göra en grammatikklass och skicka in som argument istället. Som en grammatikFabrik(Factory) vilket hade tagit en timme att fixa nu i slutet. Men ville inte in och ändra då jag suttit de timmar jag satte upp som detta skulle ta. I den tidigare kursen hade jag Daniel Toll som mentor och där strulade det mycket för mig med lite program och jag lärde mig där att sätta upp tider man ska jobba och hur mycket. Sen då man är klar med det så är man klar helt enkelt. Så jag gjorde samma för detta. Därav jag ej bröt ut i slutet och gjorde en egen klass av grammatiken.

Känns som jag har lärt mig mycket av boken,laborationen och föreläsningarna. Jag gillade att man fick reda innan vilka kapital föreläsingarna ska innehålla och egentligen hur laborationen "ska skrivas". Så man har tänkt på många av reglerna som ex. **Ha inga sidoeffekter**, **Strukturerad programmering** är några jag ej tagit upp hittills men som jag försökt använda mig utav.

Efter lite pepp av läraren så gick jag på högre betygsuppgiften vilket inte var så mycket mera än det jag redan hade gjort. Jag har inte under ett år hittills gått för högre betyg men gjorde det nu. Tack vare Daniel, så stor stjärna till honom. Sen säger jag inte att jag ska få högre betyg och vill inte ha någon sympati alls men känns skönt att jag kände att jag har tid, motivation och som att jag har avancerat framåt i mitt tänk. Så det är en till stor sak jag kommer ta med mig från detta.

Jag skulle vilja göra ett klassdiagram under "## Beskrivning av min kod" men som jag skrev ovan så har jag hållit mig till en tidsram och är uppe i den. Kanske, kanske så lägger jag till det nu i efterhand för tyvärr så är jag ej helt nöjd där. Sen är jag inte helt säker på om jag tänkt rätt gällande hur andra ska använda min kod. Har gjort readme där folk ska klona ner mitt projekt och därav fått instruktioner. Funderade återigen att kanske gå på att skapa ett NPM paket och då ska man egentligen ta bort "startApp()" funktionen och bara ha en export och sen låta användaren skriva in vad och hur den vill använda men då är jag där igen med min tidsram. =D

Slut reflektionsord: **"Tänk positivt och gärna en extra gång på namngivning, sträva högre, balansera studier/familj/jobb väl i livet, använd inte onödiga radkommentarer"**
