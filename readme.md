Hur processen fungerar gällande vilken sida som är vilken börjar med att Servern använder sig av en route som heter index.js.

Inom denna route så finns det två olika requests som kan göras, "/" för start sidan och
"/story/:id" för självaste storyn. Båda ger i retur samma njk fil, story.njk, men med olika värden varav värdena för routen "/" är hårdkodade.

Det som anges till story.njk filen är:
    1. id : number
    2. title : string
    3. text : array
    4. image : string
    5. choices : array

Som då används av Story.njk filen för att skapa sidan med hjälp av nunjucks.
text kommer i form av en array då det låter det finnas flera paragraph genom att helt enkelt ha det så att varje paragraph är sin egna string inom arrayen.

Varje värde inom choices definieras också som ett objekt som alltid har bör ha attributen:
"description" och "target_id", som då står för vad för text som ska stå på knappen respektive vilken sida som knappen går till.

Genom att trycka på en knapp som skapas av story.njk filen med hjälå av "choices" så kommer den att ta dig till routen "/story/:id" där parametern id sätts som "target_id".
Med hjälp av parametern ":id" så med hjälp av javascript så hittar den det objekt inom "story.json" (som blivit sedan tidigare parserat till en variabel på servern) som har samma id. Utifrån det objektet får den alla värden som den behöver för att skapa "story.njk".



Största skillnaden mellan detta project och wu2 är att här så kan sidorna skapas mycket mer dynamiskt än i 11ty. I 11ty så användes för det mesta maller som man kunde använda för att väldigt snabbt göra sidor själv medan här så skapas sidorna av sig själv beroende av parametrar eller queries som att de får chans att bli påverkad mer av användaren.
s
Det enda jag skulle riktigt vela förbättra är som alltid min css då jag fortfarande inte känner att min förståelse för vad som är "bra design" är låg. Utöver det kan det vara kul att prova på att kunna gjort det ännu mer dynamiskt, där varje sida inte har exakt hur den ser ut och att den kan se ut annorlunda beroende på variabler som bestämts sedan tidigare.