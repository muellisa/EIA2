/* Name:Isabell Müller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/

namespace Aufgabe10 {
    window.addEventListener("load", createElements);
    //wenn window geladen wird die Funktion createElements ausgeführt.
    window.addEventListener("change", warenkorb);
    //wenn ich etwas im window ändere wird die Funktion warenkorb ausgeführt

    //Input Element: Ich kann etwas eingeben/InPut machen
    var name: HTMLInputElement;
    var street: HTMLInputElement;
    var hNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    // Text Area Element: Textfeld mit freier Eingabemöglichkeit
    var addition: HTMLTextAreaElement;
    // Label Element: Lesbarer Text zu Auswahlmöglichkeitem
    var label: HTMLLabelElement;

    let feedback: HTMLDivElement = document.createElement("div");

    var basketBaumart: string[] = [bA[0][0], "" + bA[0][1]];
    // schubladenstelle 0 Box 0 für Name
    //schubladenstelle 0 Box 1 für Preis
    var basketHalter: string[] = ["kein Ständer ausgewählt", "0"];
    var basketLightning: string[] = [b[0][0], "" + b[0][1]];
    var basketSchmuck: string[][] = [];
    var basketDeliveryOptions: string[] = ["keine Lieferoption ausgewählt", "0"];

    function createElements(): void {
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        // holen des Div elements per ID aus dem HTML deshalb casten <>
        //selectBox = Reiter mit Auswahlmöglichkeiten NOCh unbefüllt
        let selectBox: HTMLSelectElement = document.createElement("select");
        // select Tag macht die Box quasi
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        //Zuweisung von Name und ID auf das select Tag
        baumart.appendChild(selectBox);
        //anhängen des select Tags an das Div baumart
        for (let i: number = 0; i < posten.length; i++) {
            //dynamisches Coden deshalb über array bzw Schleife
            if (posten[i].sort == "Baumart") {
                var opt: HTMLElement = document.createElement("option");
                // option HTML Element wird kreiert
                opt.innerText = posten[i].name;
                //Text wird eingefügt zb Blaufichte
                opt.id = "option" + i;
                selectBox.appendChild(opt);
                //Option wird als Kind dem Elternknoten select angehängt
            }
        }

        //Baumständer:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        // holen des Div elements per ID aus dem HTML deshalb casten <>
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].sort == "Halter") {
                //variable vom Typ RadioButton
                var radioB: HTMLInputElement = document.createElement("input");
                //Kreieren von einem Input Element mit dem Tag input
                radioB.type = "radio";
                //definieren des Types und des Namens
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                //Eigenschaften Werte zuweisen

                halterung.appendChild(radioB);
                //radio B wird dem Div halterung als Kindelement hinzugefügt

                // Label istd as was ich am Ende lese, dem passenden InPut zuweisen
                label = document.createElement("label");
                label.id = "label" + i;
                //Label Element passendem RadioButton zuweisen
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                halterung.appendChild(label);
                // Label wird dem Div Halterung als kind hinzugefügt da Input nicht geschlossen wird
            }
        }

        //Beleuchtung:
        let lightning: HTMLDivElement = <HTMLDivElement>document.getElementById("lightning");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectLightning";
        selectBox2.id = "selectLightning";
        lightning.appendChild(selectBox2);
        for (let i: number = 0; i < posten.length; i++) {

            if (posten[i].sort == "lightning") {
                var opt2: HTMLElement = document.createElement("option");
                // kreiere ein Element von Typ option
                opt2.innerText = posten[i].name;
                opt2.id = "option2." + i;
                // anderer Name der Option wie bei Baaumart
                selectBox2.appendChild(opt2);
            }
        }

        //Schmuckartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].sort == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);
                //Zum hochzählen wie radiobutton oder checkBox ...
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                //... aber vom Typ number
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                // Anfang, Ende, und Zählweise
                schmuckartikel.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                //Break damit neue Checkbox unten ist
                schmuckartikel.appendChild(br);
            }
        }

        //Deine Daten:
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        //was ist gültig, ab 1 valide zb A
        name.required = true;
        daten.appendChild(name);

        street = document.createElement("input");
        street.type = "text";
        street.name = "DatenStrasse";
        street.placeholder = "Strasse";
        street.pattern = "[a-zA-Z]{1,}";
        street.required = true;
        daten.appendChild(street);

        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);

        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);

        mail = document.createElement("input");
        mail.type = "email";
        // datentyp Email
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);

        addition = document.createElement("textarea");
        //Textareaa Element
        addition.name = "DatenZusatz";
        addition.placeholder = "Adresszusatz";
        addition.cols = 30;
        addition.rows = 3;
        addition.required = true;
        daten.appendChild(addition);

        //Lieferoptionen:
        let deliveryOptions: HTMLDivElement = <HTMLDivElement>document.getElementById("deliveryOptions");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].sort == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                deliveryOptions.appendChild(radioB2);

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                deliveryOptions.appendChild(label3);
            }
        }

        //Button:
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        //Typ Button
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        //Tasten Klich Funktion handlemousedown ausführen
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        //Event weil sich was im Dokument ändert ==> changeEvent
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //quasi versichern dass es HTML Element ist durch casten <>
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;
        //Sichtbarkeit innerhalb der Funktion

        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].sort == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                //stepper werd in lokale variable stepepr speichern 

                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
                //checkbox wird in lokale variable check boxes speichern
                              }
            if (target.value == posten[i].name && target.id == "selectBaumart") {
                //wwenn die iddes Targets select Baumart ist wird code ausgeführt
                basketBaumart[0] = posten[i].name;
                basketBaumart[1] = "" + posten[i].price;
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = posten[i].name;
                basketHalter[1] = "" + posten[i].price;

            }
            if (target.id == "radio2." + i) {
                basketDeliveryOptions[0] = posten[i].name;
                basketDeliveryOptions[1] = "" + posten[i].price;

            }
            if (target.value == posten[i].name && target.id == "selectLightning") {
                basketLightning[0] = posten[i].name;
                basketLightning[1] = "" + posten[i].price;

            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [posten[i].name, "" + (posten[i].price * parseInt(stepper[i].value))];
    //in globale Funktion Name an 1. Stelle speichern an 2. Stelle den Preis * Wert des Steppers
            }
        }

        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#0080c0";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><hr>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "Euro <br>";
        //0 Name 1 Preis
        korb.innerHTML += "Weihnachtsbaumständer: " + basketHalter[0] + " " + basketHalter[1] + "Euro<br>";
        korb.innerHTML += "" + basketLightning[0] + " " + basketLightning[1] + "Euro <br>";
        korb.innerHTML += " " + basketDeliveryOptions[0] + " " + basketDeliveryOptions[1] + "Euro <br>";

        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketDeliveryOptions[1]);
        //String in Number umwandeln
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                //wenn haken gesetz ausführen
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "Euro <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "Euro";
    }

    //Feedback zur Eingabe
    function handleMouseDown(_event: MouseEvent): void {
        feedback.innerText = " ";
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || street.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            /* checkvalidity ist eine festgelegte Methode also ein dem Fall ein boolean das entweder
            true oder false ist
            mit pattern oben festgelegt*/

            feedback.innerText = "Info zu deiner Bestellung: Bitte überprüfe Deine Eingabe.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
}