/* Name:Isabell M�ller
     Matrikel:256034
     Datum:06.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var street;
    var hNr;
    var ort;
    var plz;
    var mail;
    var addition;
    var label;
    var basketBaumart = [Aufgabe10.bA[0][0], "" + Aufgabe10.bA[0][1]];
    var basketHalter = ["kein St�nder ausgew�hlt", "0"];
    var basketLightning = [Aufgabe10.b[0][0], "" + Aufgabe10.b[0][1]];
    var basketSchmuck = [];
    var basketDeliveryOptions = ["keine Lieferoption ausgew�hlt", "0"];
    function createElements() {
        //Baumart:
        var baumart = document.getElementById("baumart");
        var selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = Aufgabe10.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Baumst�nder:
        var halterung = document.getElementById("halterung");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
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
            if (Aufgabe10.posten[i].art == "lightning") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe10.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        var schmuckartikel = document.getElementById("schmuckartikel");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Schmuck") {
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
                var stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
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
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        addition = document.createElement("textarea");
        addition.name = "DatenZusatz";
        addition.placeholder = "Adresszusatz";
        addition.cols = 30;
        addition.rows = 3;
        addition.required = true;
        daten.appendChild(addition);
        //Lieferoptionen:
        var deliveryOptions = document.getElementById("deliveryOptions");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Lieferung") {
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
        submit.innerText = "Bestellung �berpr�fen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        var target = _event.target;
        var stepper = [];
        var checkBoxes = [];
        var gesamtpreis = 0;
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectBaumart") {
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
        korb.style.width = "25%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#0080c0";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><hr>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "� <br>";
        korb.innerHTML += "Weihnachtsbaumst�nder: " + basketHalter[0] + " " + basketHalter[1] + "�<br>";
        korb.innerHTML += "" + basketLightning[0] + " " + basketLightning[1] + "� <br>";
        korb.innerHTML += " " + basketDeliveryOptions[0] + " " + basketDeliveryOptions[1] + "� <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketDeliveryOptions[1]);
        for (var i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "� <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "�";
    }
    function handleMouseDown(_event) {
        var feedback = document.createElement("div");
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || street.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte �berpr�fe sie nocheinmal.";
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