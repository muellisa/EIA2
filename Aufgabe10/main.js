/* Name:Isabell Müller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", createElements);
    //wenn window geladen wird die Funktion createElements ausgeführt.
    window.addEventListener("change", warenkorb);
    //wenn ich etwas im window ändere wird die Funktion warenkorb ausgeführt
    //Input Element: Ich kann etwas eingeben/InPut machen
    var name;
    var street;
    var hNr;
    var ort;
    var plz;
    var mail;
    // Text Area Element: Textfeld mit freier Eingabemöglichkeit
    var addition;
    // Label Element: Lesbarer Text zu Auswahlmöglichkeitem
    var label;
    var feedback = document.createElement("div");
    var basketBaumart = [Aufgabe10.bA[0][0], "" + Aufgabe10.bA[0][1]];
    // schubladenstelle 0 Box 0 für Name
    //schubladenstelle 0 Box 1 für Preis
    var basketHalter = ["kein Ständer ausgewählt", "0"];
    var basketLightning = [Aufgabe10.b[0][0], "" + Aufgabe10.b[0][1]];
    var basketSchmuck = [];
    var basketDeliveryOptions = ["keine Lieferoption ausgewählt", "0"];
    function createElements() {
        //Baumart:
        var baumart = document.getElementById("baumart");
        // holen des Div elements per ID aus dem HTML deshalb casten <>
        //selectBox = Reiter mit Auswahlmöglichkeiten NOCh unbefüllt
        var selectBox = document.createElement("select");
        // select Tag macht die Box quasi
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        //Zuweisung von Name und ID auf das select Tag
        baumart.appendChild(selectBox);
        //anhängen des select Tags an das Div baumart
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            //dynamisches Coden deshalb über array bzw Schleife
            if (Aufgabe10.posten[i].sort == "Baumart") {
                var opt = document.createElement("option");
                // option HTML Element wird kreiert
                opt.innerText = Aufgabe10.posten[i].name;
                //Text wird eingefügt zb Blaufichte
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Baumständer:
        var halterung = document.getElementById("halterung");
        // holen des Div elements per ID aus dem HTML deshalb casten <>
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].sort == "Halter") {
                //variable vom Typ RadioButton
                var radioB = document.createElement("input");
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
                label.innerText = Aufgabe10.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung:
        var lightning = document.getElementById("lightning");
        var selectBox2 = document.createElement("select");
        selectBox2.name = "SelectLightning";
        selectBox2.id = "selectLightning";
        lightning.appendChild(selectBox2);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].sort == "lightning") {
                var opt2 = document.createElement("option");
                // kreiere ein Element von Typ option
                opt2.innerText = Aufgabe10.posten[i].name;
                opt2.id = "option2." + i;
                // anderer Name der Option wie bei Baaumart
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        var schmuckartikel = document.getElementById("schmuckartikel");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].sort == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe10.posten[i].name;
                schmuckartikel.appendChild(label2);
                //Zum hochzählen wie radiobutton oder checkBox ...
                var stepper = document.createElement("input");
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
                var br = document.createElement("br");
                //Break damit neue Checkbox unten ist
                schmuckartikel.appendChild(br);
            }
        }
        //Deine Daten:
        var daten = document.getElementById("daten");
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
        var deliveryOptions = document.getElementById("deliveryOptions");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].sort == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                deliveryOptions.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe10.posten[i].name;
                deliveryOptions.appendChild(label3);
            }
        }
        //Button:
        var button = document.getElementById("button");
        var submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        //Typ Button
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        //Tasten Klich Funktion handlemousedown ausführen
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        //Event weil sich was im Dokument ändert ==> changeEvent
        var target = _event.target;
        //quasi versichern dass es HTML Element ist durch casten <>
        var stepper = [];
        var checkBoxes = [];
        var gesamtpreis = 0;
        //Sichtbarkeit innerhalb der Funktion
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].sort == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                //stepper werd in lokale variable stepepr speichern 
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectBaumart") {
                //wwenn die iddes Targets select Baumart ist wird code ausgeführt
                basketBaumart[0] = Aufgabe10.posten[i].name;
                basketBaumart[1] = "" + Aufgabe10.posten[i].price;
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = Aufgabe10.posten[i].name;
                basketHalter[1] = "" + Aufgabe10.posten[i].price;
            }
            if (target.id == "radio2." + i) {
                basketDeliveryOptions[0] = Aufgabe10.posten[i].name;
                basketDeliveryOptions[1] = "" + Aufgabe10.posten[i].price;
            }
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectLightning") {
                basketLightning[0] = Aufgabe10.posten[i].name;
                basketLightning[1] = "" + Aufgabe10.posten[i].price;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [Aufgabe10.posten[i].name, "" + (Aufgabe10.posten[i].price * parseInt(stepper[i].value))];
            }
        }
        var korb = document.getElementById("zusammenfassung");
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
        for (var i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                //wenn haken gesetz ausführen
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "Euro <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "Euro";
    }
    //Feedback zur Eingabe
    function handleMouseDown(_event) {
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
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map