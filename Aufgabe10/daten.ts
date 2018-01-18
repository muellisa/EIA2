/* Name:Isabell Müller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/

namespace Aufgabe10 {
    //Baumart
   //export macht das interface für den ganzen Namespace bereich sichtbar
    export interface Order {
        sort: string; //Art des Produktes: Baum,Halter...
        name: string; // Typ des Produktes: Blaufichte, Grau...
        price: number; //Preis
    }

    export let posten: Order[] = [
    //Array vom Typen des Interface befüllt
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
    
    //Globale Variablen, 
    export let bA: string[][] = [];
    //Variable bA homogenes Assoziatives Array vom datentyp String
    //"eine Schublade mit 2 Unterschubladen"
    
    export let b: string[][] = [];
    //Variable b homogenes Assoziatives Array vom datentyp String
    //"eine Schublade mit 2 Unterschubladen"
    
    for (var i: number = 0; i < posten.length; i++) {
        //Start bei i=0, Abbruch nach Ende des Arrays,zählt immer um 1 hoch 
        if (posten[i].sort == "Baumart") {
            // var Temp wird in bA eingeschoben
           var temp: any = [posten[i].name, posten[i].price]; 
           bA.push(temp);
            /* temp= Temporäre Variable,Schleife durchläuft Array wenn sort an Stelle i
            = Baumart wird Codeblock ausgeführt.
            Den Name und Preis an der Stelle i in das array bA hineinpushen an die nächste freie Stelle.
            */
        }
            
        if (posten[i].sort == "lightning") {
           var temp: any = [posten[i].name, posten[i].price]; 
           b.push(temp);
           /* if Schleife wenn Die Art/Sorte an der Stelle i des Arrays =lightning ist,
            wird Codeblock ausgeführt.
            Name und Preis wedren in die Temporäre variable eingespeichert.
            Und in Das Array das in der Variable b liegt hineingepusht.*/
        }
    }
}