/* Name:Isabell M�ller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/

namespace Aufgabe10 {
    //Baumart
    
    export interface Order {
        art: string;
        name: string;
        price: number;
    }

    export let posten: Order[] = [
        { art: "Baumart", name: "Nordmanntanne", price: 31.55 },
        { art: "Baumart", name: "Blaufichte", price: 48.36 },
        { art: "Baumart", name: "Fichte", price: 29.99 },
        { art: "Baumart", name: "Kiefer", price: 56.84 },
        { art: "Halter", name: "schwarz", price: 15.99 },
        { art: "Halter", name: "gold", price: 24.63 },
        { art: "Halter", name: "silber", price: 20.47 },
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
    
    export let bA: string[][] = [];
    export let b: string[][] = [];
    
    for (var i: number = 0; i < posten.length; i++) {
        if (posten[i].art == "Baumart") {
           var temp: any = [posten[i].name, posten[i].price]; 
           bA.push(temp);
        }

        if (posten[i].art == "lightning") {
           var temp: any = [posten[i].name, posten[i].price]; 
           b.push(temp);
        }
    }
}