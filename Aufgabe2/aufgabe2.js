var skipiste;
(function (skipiste) {
    window.addEventListener("load", draw);
    var crc2;
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
        /*
              
         //Baum 1
         crc2.beginPath();
         crc2.moveTo(130, 400);
         crc2.lineTo(180, 400);
         crc2.lineTo(155, 300);
         crc2.closePath();
         crc2.strokeStyle = "#006200";
         crc2.stroke();
         crc2.fillStyle = "#006200";
         crc2.fill();
         
         crc2.fillStyle = "#cd5700";
         crc2.fillRect(150, 400, 5, 7);
       
         
         //Baum 2
         crc2.beginPath();
         crc2.moveTo(460, 300);
         crc2.lineTo(500, 300);
         crc2.lineTo(485, 260);
         crc2.closePath();
         crc2.strokeStyle = "#006200";
         crc2.stroke();
         crc2.fillStyle = "#006200";
         crc2.fill();
         
         crc2.fillStyle = "#cd5700";
         crc2.fillRect(480, 300, 5, 7);
         
         //Baum 3
         crc2.beginPath();
         crc2.moveTo(720, 470);
         crc2.lineTo(690, 580);
         crc2.lineTo(750, 580);
         crc2.closePath();
   crc2.strokeStyle = "#006200";
         crc2.stroke();
         crc2.fillStyle = "#006200";
         crc2.fill();
         
         crc2.fillStyle = "#cd5700";
         crc2.fillRect(720, 580, 5, 7);
       */
        //Sonne
        crc2.beginPath();
        crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7FE2E";
        crc2.fill();
        //Wolke1
        crc2.beginPath();
        crc2.arc(250, 90, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7f7e3";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(295, 90, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7f7e3";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(273, 70, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7f7e3";
        crc2.fill();
        //Wolke2
        crc2.beginPath();
        crc2.arc(675, 65, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7f7e3";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(710, 65, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7f7e3";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(693, 46, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#f7f7e3";
        crc2.fill();
        //Baum mit Funktionsaufruf
        drawTree(150, 500, "#006200");
        //B�ume zuf�llig per Schleife angeordnet
        for (var i = 0; i < 5; i++) {
            var x = 38 + Math.random() * 180;
            var y = 380 + Math.random() * 180;
            drawTree(x, y, "#006200");
        }
        //Schneeflocken durch Zufall
        for (var i = 0; i < 500; i++) {
            var x = 0 + Math.random() * 800;
            var y = 0 + Math.random() * 600;
            drawSnow(x, y, 2, 0, 2 * Math.PI, "#ffffff");
        }
        //Funktion f�r automatische Baumgenerierungr
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
        function drawSnow(_x1, _y1, _radius, _start, _end, _color) {
            crc2.beginPath();
            crc2.arc(_x1, _y1, _radius, _start, _end);
            crc2.fillStyle = _color;
            crc2.fill();
        }
    }
})(skipiste || (skipiste = {}));
//# sourceMappingURL=aufgabe2.js.map