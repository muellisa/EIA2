/* Name:Isabell M�ller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { art: "Baumart", name: "Nordmanntanne", price: 30.00 },
        { art: "Baumart", name: "Blaufichte", price: 48.50 },
        { art: "Baumart", name: "Fichte", price: 29.99 },
        { art: "Baumart", name: "Kiefer", price: 56.84 },
        { art: "Halter", name: "schwarz", price: 15.99 },
        { art: "Halter", name: "gold", price: 24.63 },
        { art: "Halter", name: "silber", price: 24.99 },
        { art: "Halter", name: "grau", price: 8.68 },
        { art: "lightning", name: "Lichterkette", price: 31.55 },
        { art: "lightning", name: "Kerzen", price: 22.85 },
        { art: "Schmuck", name: "Kugel, bunt gestreift", price: 2.11 },
        { art: "Schmuck", name: "Kugel, rot", price: 0.80 },
        { art: "Schmuck", name: "Kugel, blau", price: 0.88 },
        { art: "Schmuck", name: "Kugel, silber", price: 0.90 },
        { art: "Schmuck", name: "Kugel, gold", price: 0.99 },
        { art: "Schmuck", name: "Lametta, rot", price: 0.50 },
        { art: "Schmuck", name: "Lametta, silber", price: 0.50 },
        { art: "Schmuck", name: "Lametta, gold", price: 0.50 },
        { art: "Schmuck", name: "Herz-Anhänger", price: 3.79 },
        { art: "Schmuck", name: "Engel-Anhänger", price: 4.62 },
        { art: "Schmuck", name: "Stern-Anhänger", price: 5.82 },
        { art: "Schmuck", name: "Zuckerstange", price: 0.30 },
        { art: "Schmuck", name: "Orangenscheiben", price: 0.55 },
        { art: "Lieferung", name: "Standard-Lieferung", price: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", price: 4.88 }
    ];
    Aufgabe10.bA = [];
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Baumart") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].price];
            Aufgabe10.bA.push(temp);
        }
        if (Aufgabe10.posten[i].art == "lightning") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].price];
            Aufgabe10.b.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=daten.js.map