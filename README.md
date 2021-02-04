# Login-page
A simple login verification with javascript

#Motiveringar

Jag motiverar koden uppifrån och ned, där jag säger vad jag gjort och sedan vad jag gjort bra men kanske skulle gjort annorlunda.

Till att börja med med har jag en If funktion som hämtar loginDetails från localStorage, är LocalStorage tomt så tar den arrayen med
användarnamnen och lösenorden och pushar det till localstorage. Det här gör att vi alltid har två inloggingar till hemsidan utan att
registrera nya användare. Det är för att det är enligt uppgiften.

Ändringar jag hade gjort här är att jag nog inte hade använt arrayen överhuvudtaget i bästa fall, utan att man alltid måste skapa en
ny användare. Annars tycker jag det är rätt snyggt gjort. Man kan egentligen ta bort hela den if-funktionen och ändå ha en fungerande app.

Nästa del är min login function. Det står rätt tydligt i kommenterarerna vad varje del gör, men jag går igenom det ändå.
Vi hämtar username och password valuet från våra inputs på hemsidan och hämtar loginDetails från loginstorage.
Jag clearar också den p tag som säger att det är fel lösenord, annars syns den när man försöker logga in nästa gång vilket
kan vara missledande. Här vet jag faktiskt inte vad jag skulle gjort annorlunda. Det är möjligt att det kanske finns ett
mer smutt sätt att ta bort tidigare text från "verification", men det är inget jag vet om för stunden.

Jag använder sedan en for-loop för att loopa igenom localstorage, sedan en if function som kollar om mina inputs matchar något
som finns i mitt localStorage. Så vitt jag vet är det ett korrekt sätt att leta igenom information på, återigen iallafall så vitt jag vet.
Om det skulle vara true, dvs att det är rätt inloggningsuppgifter, så göms hela min form med inputs, p-taggar och buttons.
Efter det skapas det dynamniska välkommstmeddelandet, där jag använder dom-manipulation för att skapa en H1 som jag sedan använder template
literal för att dynamniskt kunna ändra vilket namn det är som displayas. Sedan det vanliga där vi appendar till en div. 
Här hade jag tagit bort min DIV, jag är ganska säker på att det hade fungerat utan att ha en DIV i HTML som hade genererat mindre kod i både
JS- och HTML-filen.

Jag skapar också en button dynamiskt med texten "log out" för att kunna logga ut när man väl är inloggad. Sedan läger jag till en onclick-function
som reloadar sidan för att logga ut. Det här är väl den delen jag vill göra om mest, om jag skulle ha flera sidor på min hemsida och det inte varit en
SPA så hade det här inte fungerat alls. Men jag är osäker på hur jag skulle fått till att man är inloggad hela tiden, så därför fick det bli en lite "billigare"
lösning denna gång. Efter allt detta avslutar vi hela if-funktionen med en return.

Om det skulle vara fel lösenord då? 
Ja, då hämtar vi min "verification" P-tag och fyller den med en röd text "wrong password, please try again" och ändrar texten till röd. Inte svårare än så.
Den här delen är jag också nöjd med, det finns inte så mycket jag hade ändrat iallafall. I bäst av alla världar kanske sparat det användaren inputat och lagt till en 
länk och skrivit "Wrong login details, want to sign up?" där man automatiskt gör ett konto om man trycker på sign up. Det hade varit snyggt, men det är inte allt för svårt
att bara trycka på "sign up" istället.

Sist men inte minst har vi signUp funktionen.
Här hämtar vi och parsar våra login details, sedan tar vi som i login funktionen värdet från våra inputs, skapar en varaiabel som heter "entry" med username och password. 
Sedan så pushar vi entry till obj som är våran localstorage, för att sedan setitem och stringifya våra inputs. Sedan använder vi samma p-tag med "verification" och skriver 
"user is registered" osv. 
Här hade jag ändrat färgen från förra verification så att det kanske är en grön text när man signar upp, något lite gladare. Annars är jag nöjd allt som allt. 

Vid vidare frågor så kontakta mig.
