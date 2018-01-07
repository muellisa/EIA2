/* Name:Isabell Müller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/

namespace Aufgabe10 {
    //Baumart
    
    export interface Order {
        sort: string;
        name: string;
        price: number;
    }

    export let posten: Order[] = [
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
    
    export let bA: string[][] = [];
    export let b: string[][] = [];
    
    for (var i: number = 0; i < posten.length; i++) {
        if (posten[i].sort == "Baumart") {
           var temp: any = [posten[i].name, posten[i].price]; 
           bA.push(temp);
        }

        if (posten[i].sort == "lightning") {
           var temp: any = [posten[i].name, posten[i].price]; 
           b.push(temp);
        }
    }
}