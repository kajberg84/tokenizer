# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [x] I min tokeniserare finns inga tokentyper eller reg-exp. Dessa finns i mitt testprojekt eftersom de skapas utav användaren.
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt, det bör fungera :) )
  - [x] De enda statiska metoder eller funktioner utanför klasser som jag har är för att starta upp min testapplikation ex main(java).
  - [x] De enda bibliotek och färdiga klasser som används är sådana som måste användas (eller som används för att testa modulen).

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. Då skall du inte lämna in!
  - [ ] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ ] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [ ] Reflektion är skriven
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [x] Samtliga testfall är skrivna
    - [ ] Egna testfall för Maximal munch och kantfall
    - [x] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [x] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

## Återanvändning
Enkla instruktioner som står övers i README.md.
Lättförstålig struktur på var användaren ska lägga in sin gramatik och sträng att skapa tokens från.
Användaren kommer skriva in de metoder denne vill använda(återfinns i Readme)

## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. 

## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar.

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

---------

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

### Testkommentar

 Till en start skapar mitt testfall på TC15, TC21 lexikalfel.
Många tycker olika här men inget svårt att ändra i koden om man vill ha ut tidigare tokens.

## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt.
**Use Revealing Names** Ex: createTokens, nextToken, checkForOnlySpaces.
**Avoid Disinformation & Use Pronouncable names** - Försökte tänkte extra på detta.
**Use Pronouncable names** - Försökt tänkte extra på detta.
**MethodNames should have prefix** - EX: showTokenCollection, saveTokenToCollection, removeCreatedTokenFromString, createTokenType
**Dont Pun** - Ex: alltid check om man ska kolla upp något. create vid skapande. show om man ska visa något.

Functions:
**Do one thing** - det gör det flesta.
**One level of nesting** - Tog med en nypa sant. Höll mig till max två(fast boken säger ett men if/else satser gillar jag istället för if och sen bara return.) Ett fall har jag tre nesting. "While" som har en "for" som har en "if" i sig. Jag skulle kunna bryta ut if satsen men enligt min mening så kommer det det inte bli enklare att läsa. "createTokens()"

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| Tokenizer(Det är en tokenizer) |  Hade faktiskt KBsTokenizer först vilket inte sa mycket för andra. Sen läste jag boken och insåg att KB som står för "Kaj Berg" inte är så bra. |
|                      |                                              |
|                      |                                              |
|                      |                                              |
|                      |                                              |

### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |

## Laborationsreflektion

Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 


