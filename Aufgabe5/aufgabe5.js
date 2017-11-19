var aufgabe4;
(function (aufgabe4) {
    //  EventListener h�rt auf load,Seite wird vollst�ndig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    var crc2;
    // Anlegzng der Arrays 
    var skifahrer = [];
    var snowX = [];
    var snowY = [];
    var cloudX = [];
    var cloudY = [];
    var imgData;
    // Funktion f�r den Canvas
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Hintergrund,Himmel
        crc2.fillStyle = "#a2a2ff";
        crc2.fillRect(0, 0, 800, 600);
        //Berg Nummer 1
        crc2.beginPath();
        crc2.moveTo(140, 600);
        crc2.lineTo(400, 140);
        crc2.lineTo(700, 600);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();
        //Berg Nummer 2
        crc2.beginPath();
        crc2.moveTo(330, 600);
        crc2.lineTo(550, 50);
        crc2.lineTo(780, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();
        //Berg Nummer 3
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(350, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();
        //Berggipfel
        crc2.beginPath();
        crc2.moveTo(550, 50);
        crc2.lineTo(592, 150);
        crc2.lineTo(510, 150);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Piste
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Skilift
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(800, 600);
        crc2.strokeStyle = "000000";
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, 380);
        crc2.lineTo(800, 580);
        crc2.strokeStyle = "000000";
        crc2.stroke();
        crc2.fill();
        //Sonne
        crc2.beginPath();
        crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7FE2E";
        crc2.fill();
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
        for (var i = 0; i < 800; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 600;
        }
        //Wolken
        for (var i = 0; i < 2; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 130;
        }
        //Skifahrer
        for (var i = 0; i < 3; i++) {
            skifahrer[i] = {
                x: 0,
                y: 320,
                dx: Math.random() * 1 + 1.5,
                dy: Math.random() * 1 + 1.5,
                color: "hsl(" + Math.random() * 360 + ",100%, 50%)"
            };
        }
        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf 
        animate();
    }
    //Funktion f�r automatische Baumgenerierung
    function drawTree(_x, _y, _color) {
        crc2.fillStyle = "#cd5700";
        crc2.fillRect(_x, _y, 20, 30);
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //Funktion f�r Schneeflocken
    function drawSnow(_x1, _y1) {
        crc2.beginPath();
        crc2.arc(_x1, _y1, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    // Funktion f�r Wolken
    function cloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F0FFFF";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 45, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F0FFFF";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 23, _y - 20, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#F0FFFF";
        crc2.fill();
    }
    //Funktion f�r Skifahrer
    function drawAndMoveSkifahrer(_Skifahrer) {
        _Skifahrer.x += _Skifahrer.dx * 3;
        _Skifahrer.y += _Skifahrer.dy * 2; // Steigung
        crc2.fillStyle = _Skifahrer.color;
        crc2.fillRect(_Skifahrer.x, _Skifahrer.y, 50, -10);
        crc2.fillRect(_Skifahrer.x + 10, _Skifahrer.y - 10, 16, -40);
        //Kopf
        crc2.beginPath();
        crc2.arc(_Skifahrer.x + 18, _Skifahrer.y - 50, 12, 0, 2 * Math.PI);
        crc2.fillStyle = _Skifahrer.color;
        crc2.fill();
        crc2.fillStyle = _Skifahrer.color;
        crc2.beginPath();
        crc2.moveTo(_Skifahrer.x + 20, _Skifahrer.y - 35);
        crc2.lineTo(_Skifahrer.x + 40, _Skifahrer.y - 30);
        crc2.stroke();
        crc2.fillStyle = _Skifahrer.color;
        crc2.beginPath();
        crc2.moveTo(_Skifahrer.x + 40, _Skifahrer.y - 30);
        crc2.lineTo(_Skifahrer.x + 55, _Skifahrer.y - 10);
        crc2.stroke();
    }
    //Funktion zum animieren
    function animate() {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        //Schnee
        for (var i = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random();
            drawSnow(snowX[i], snowY[i]);
        }
        //Wolken gro�
        for (var i = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random();
            cloud(cloudX[i], cloudY[i]);
        }
        //Skifahrer
        for (var i = 0; i < skifahrer.length; i++) {
            drawAndMoveSkifahrer(skifahrer[i]);
            if (skifahrer[i].x > 800) {
                skifahrer[i].x = 0;
                skifahrer[i].y = 310;
            }
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=aufgabe5.js.map