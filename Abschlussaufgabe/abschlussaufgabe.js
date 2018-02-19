var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //  EventListener hört auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    var objects = [];
    var imgData;
    var image;
    var ShipHit = 0;
    var NetHit = 0;
    var RockHit = 0;
    var RiffHit = 0;
    /* ----------------------------------------
       ---------------------------------------
       ---------------------------------------*/
    // Funktion für den Canvas
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Hintergrund einbinden
        image = document.getElementById('background');
        Abschlussaufgabe.crc2.drawImage(image, 0, 0); // Parameter: Bildreferenz, x, y
        alert(" Sammy die Schildkröte ist neu im Riff. Hilf ihm seine Umgebung zu entdecken!");
        document.getElementById("ShipHitBox").addEventListener("click", ShipClick);
        document.getElementById("NetHitBox").addEventListener("click", NetClick);
        document.getElementById("RockHitBox").addEventListener("click", RockClick);
        document.getElementById("RiffHitBox").addEventListener("click", RiffClick);
        //Riff
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(780, 35, 80, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "gray";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(780, 130, 40, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "gray";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(200, 540, 90, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "gray";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 400);
        Abschlussaufgabe.crc2.lineTo(400, 600);
        Abschlussaufgabe.crc2.lineTo(0, 600);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fillStyle = "#c2c2c2";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(460, 580, 90, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "gray";
        Abschlussaufgabe.crc2.fill();
        //Netz
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 90);
        Abschlussaufgabe.crc2.lineTo(160, 0);
        Abschlussaufgabe.crc2.strokeStyle = "white";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 60);
        Abschlussaufgabe.crc2.lineTo(110, 0);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 30);
        Abschlussaufgabe.crc2.lineTo(55, 0);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 30);
        Abschlussaufgabe.crc2.lineTo(30, 74);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(35, 0);
        Abschlussaufgabe.crc2.lineTo(80, 45);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fill();
        //Schildkröte Sammy
        for (var i = 0; i < 1; i++) {
            var tu = new Abschlussaufgabe.Turtle(0, 50);
            objects.push(tu);
        }
        //Boot
        for (var i = 0; i < 1; i++) {
            var sh = new Abschlussaufgabe.Ship(0, 10);
            objects.push(sh);
        }
        //Hintergrund speichern
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
    }
    /* ----------------------------------------
       ---------------------------------------
       -----------------------------------*/
    function ShipClick() {
        ShipHit++;
        if (ShipHit >= 1) {
            alert(" Dies ist ein Schiff, dort sind Menschen. Ihnen musst du mit Vorsicht begegnen!");
        }
    }
    function NetClick() {
        NetHit++;
        if (NetHit >= 1) {
            alert(" Nimm dich in Acht! Pass auf und verfange dich nicht im Fischernetz!!");
        }
    }
    function RiffClick() {
        RiffHit++;
        if (RiffHit >= 1) {
            alert("Autsch!,das Riff ist ganz schön spitz und piekst!");
        }
    }
    function RockClick() {
        RockHit++;
        if (RockHit >= 1) {
            //Fische
            alert("Oh jetzt hast du die Fische aufgemischt.");
            for (var i = 0; i < 6; i++) {
                var fi = new Abschlussaufgabe.Fishs(0, 60);
                objects.push(fi);
            }
        }
    }
    function animate() {
        console.log("Timeout");
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        for (var i = 0; i < objects.length; i++) {
            var s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 65); //Alle 65ms startet Funktion sich selbst neu*/
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=abschlussaufgabe.js.map