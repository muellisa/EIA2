var Aufgabe5;
(function (Aufgabe5) {
    //  EventListener h�rt auf load,Seite wird vollst�ndig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    /*  //Interface mit Info f�r Skifahrer
      interface SkifahrerInfo {
          x: number;
          y: number;
          dx: number;
          dy: number;
          color: string;
          }*/
    // Anlegung der Arrays 
    var skifahrer = []; // arrays von Typ Klasse
    var cloud = [];
    var snow = [];
    var imgData;
    // Funktion f�r den Canvas
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe5.crc2 = canvas.getContext("2d");
        console.log(Aufgabe5.crc2);
        //Hintergrund,Himmel
        Aufgabe5.crc2.fillStyle = "#a2a2ff";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berg Nummer 1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(140, 600);
        Aufgabe5.crc2.lineTo(400, 140);
        Aufgabe5.crc2.lineTo(700, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#c2c2c2";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#c2c2c2";
        Aufgabe5.crc2.fill();
        //Berg Nummer 2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(330, 600);
        Aufgabe5.crc2.lineTo(550, 50);
        Aufgabe5.crc2.lineTo(780, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#c2c2c2";
        Aufgabe5.crc2.fill();
        //Berg Nummer 3
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(200, 100);
        Aufgabe5.crc2.lineTo(350, 600);
        Aufgabe5.crc2.lineTo(0, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#c2c2c2";
        Aufgabe5.crc2.fill();
        //Berggipfel
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(550, 50);
        Aufgabe5.crc2.lineTo(592, 150);
        Aufgabe5.crc2.lineTo(510, 150);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ffffff";
        Aufgabe5.crc2.fill();
        //Piste
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 300);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.lineTo(0, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ffffff";
        Aufgabe5.crc2.fill();
        //Skilift
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 400);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.strokeStyle = "000000";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 380);
        Aufgabe5.crc2.lineTo(800, 580);
        Aufgabe5.crc2.strokeStyle = "000000";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fill();
        //Sonne
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#F7FE2E";
        Aufgabe5.crc2.fill();
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
            snow[i] = new Aufgabe5.Snow(0, 0); //new ruft constructor auf // Neue Instanz einer Klasse wwird erstellt
        }
        //Wolken
        for (var i = 0; i < 2; i++) {
            cloud[i] = new Aufgabe5.Cloud(0 + Math.random() * 800, 130);
        }
        //Skifahrer
        for (var i = 0; i < 3; i++) {
            skifahrer[i] = new Aufgabe5.Skifahrer(0, 320);
        }
        //Hintergrund speichern
        imgData = Aufgabe5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf 
        animate();
    }
    //Funktion f�r automatische Baumgenerierung
    function drawTree(_x, _y, _color) {
        Aufgabe5.crc2.fillStyle = "#cd5700";
        Aufgabe5.crc2.fillRect(_x, _y, 20, 30);
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(_x - 30, _y);
        Aufgabe5.crc2.lineTo(_x + 10, _y - 100);
        Aufgabe5.crc2.lineTo(_x + 50, _y);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = _color;
        Aufgabe5.crc2.fill();
    }
    /*
            //Funktion f�r Schneeflocken
            function drawSnow(_x1: number, _y1: number ): void {
    
                crc2.beginPath();
                crc2.arc(_x1, _y1, 2, 0, 2 * Math.PI);
                crc2.fillStyle = "#FFFFFF";
                crc2.fill();
            }
    
        // Funktion f�r Wolken
        function cloud(_x: number, _y: number): void {
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
        function drawAndMoveSkifahrer(_Skifahrer: SkifahrerInfo): void {
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
        */
    //Funktion zum animieren
    function animate() {
        console.log("Timeout");
        Aufgabe5.crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        //Schnee
        for (var i = 0; i < snow.length; i++) {
            var s = snow[i]; // an der stelle [i] des arrays laden und per s.update an die Klasse �bergeben
            s.update(); // Move and Draw aufrufen
        }
        //Wolken 
        for (var i = 0; i < cloud.length; i++) {
            var s = cloud[i];
            s.update(); // Move and Draw aufrufen
        }
        //Skifahrer
        for (var i = 0; i < skifahrer.length; i++) {
            var s = skifahrer[i];
            s.update(); // Move and Draw aufrufen
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=aufgabe5.js.map