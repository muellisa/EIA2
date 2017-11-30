var Aufgabe6;
(function (Aufgabe6) {
    //  EventListener h�rt auf load,Seite wird vollst�ndig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    var objects = [];
    var imgData;
    // Funktion f�r den Canvas
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(Aufgabe6.crc2);
        //Hintergrund,Himmel
        Aufgabe6.crc2.fillStyle = "#a2a2ff";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg Nummer 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(140, 600);
        Aufgabe6.crc2.lineTo(400, 140);
        Aufgabe6.crc2.lineTo(700, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#c2c2c2";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Berg Nummer 2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(330, 600);
        Aufgabe6.crc2.lineTo(550, 50);
        Aufgabe6.crc2.lineTo(780, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Berg Nummer 3
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(200, 100);
        Aufgabe6.crc2.lineTo(350, 600);
        Aufgabe6.crc2.lineTo(0, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#c2c2c2";
        Aufgabe6.crc2.fill();
        //Berggipfel
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(550, 50);
        Aufgabe6.crc2.lineTo(592, 150);
        Aufgabe6.crc2.lineTo(510, 150);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Piste
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 300);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(0, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Skilift
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 400);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.strokeStyle = "000000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 380);
        Aufgabe6.crc2.lineTo(800, 580);
        Aufgabe6.crc2.strokeStyle = "000000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F7FE2E";
        Aufgabe6.crc2.fill();
        //Baum mit Funktionsaufruf
        drawTree(150, 500, "#006200");
        //B�ume zuf�llig per Schleife angeordnet
        for (var i = 0; i < 5; i++) {
            var x = 38 + Math.random() * 180;
            var y = 380 + Math.random() * 180;
            drawTree(x, y, "#006200");
        }
        // Schleifen Schnee/Skifahrer/Wolken und Startkoordinaten
        //Schnee
        for (var i = 0; i < 900; i++) {
            var s = new Aufgabe6.Snow(0, 0);
            objects.push(s);
        }
        //new ruft constructor auf // Neue Instanz einer Klasse wwird erstellt
        //Wolken & new neues Objekt der Klasse wird erzeugt
        for (var i = 0; i < 2; i++) {
            var c = new Aufgabe6.Cloud(0 + Math.random() * 800, 130);
            objects.push(c);
        }
        //Skifahrer
        for (var i = 0; i < 3; i++) {
            var sd = new Aufgabe6.Skifahrer(0, 350);
            objects.push(sd);
        }
        //Hintergrund speichern
        imgData = Aufgabe6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf 
        animate();
    }
    //Funktion f�r automatische Baumgenerierung
    function drawTree(_x, _y, _color) {
        Aufgabe6.crc2.fillStyle = "#cd5700";
        Aufgabe6.crc2.fillRect(_x, _y, 20, 30);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x - 30, _y);
        Aufgabe6.crc2.lineTo(_x + 10, _y - 100);
        Aufgabe6.crc2.lineTo(_x + 50, _y);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
    }
    //Funktion zum animieren
    function animate() {
        console.log("Timeout");
        Aufgabe6.crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        for (var i = 0; i < objects.length; i++) {
            var s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=aufgabe6.js.map