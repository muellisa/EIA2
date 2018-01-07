/* Name:Isabell Müller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { sort: "Baumart", name: "Nordmanntanne", price: 30.00 },
        { sort: "Baumart", name: "Blaufichte", price: 48.50 },
        { sort: "Baumart", name: "Fichte", price: 29.99 },
        { sort: "Baumart", name: "Kiefer", price: 50.00 },
        { sort: "Halter", name: "schwarz", price: 15.99 },
        { sort: "Halter", name: "gold", price: 24.60 },
        { sort: "Halter", name: "silber", price: 24.99 },
        { sort: "Halter", name: "grau", price: 8.00 },
        { sort: "lightning", name: "Lichterkette", price: 31.99 },
        { sort: "lightning", name: "Kerzen", price: 22.00 },
        { sort: "Schmuck", name: "Kugel, bunt gestreift", price: 2.00 },
        { sort: "Schmuck", name: "Kugel, rot", price: 0.80 },
        { sort: "Schmuck", name: "Kugel, blau", price: 0.80 },
        { sort: "Schmuck", name: "Kugel, silber", price: 0.90 },
        { sort: "Schmuck", name: "Kugel, gold", price: 0.99 },
        { sort: "Schmuck", name: "Lametta, rot", price: 0.50 },
        { sort: "Schmuck", name: "Lametta, silber", price: 0.50 },
        { sort: "Schmuck", name: "Lametta, gold", price: 0.50 },
        { sort: "Schmuck", name: "Herz-Anhänger", price: 3.99 },
        { sort: "Schmuck", name: "Engel-Anhänger", price: 4.60 },
        { sort: "Schmuck", name: "Stern-Anhänger", price: 5.80 },
        { sort: "Schmuck", name: "Zuckerstange", price: 0.30 },
        { sort: "Schmuck", name: "Orangenscheiben", price: 0.55 },
        { sort: "Lieferung", name: "Standard-Lieferung", price: 0.0 },
        { sort: "Lieferung", name: "Express-Lieferung", price: 4.99 }
    ];
    Aufgabe10.bA = [];
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].sort == "Baumart") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].price];
            Aufgabe10.bA.push(temp);
        }
        if (Aufgabe10.posten[i].sort == "lightning") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].price];
            Aufgabe10.b.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=daten.js.map