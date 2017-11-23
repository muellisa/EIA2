namespace Aufgabe5 {

    //  EventListener hört auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    export let crc2: CanvasRenderingContext2D;

    // Anlegung der Arrays 
    let skifahrer: Skifahrer[] = []; // arrays von Typ Klasse
    let cloud: Cloud[] = [];
    let snow: Snow[] = [];


    let imgData: ImageData;

    // Funktion für den Canvas
    function draw(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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

        //Bäume zufällig per Schleife angeordnet
        for (let i: number = 0; i < 5; i++) {

            let x: number = 38 + Math.random() * 180;
            let y: number = 380 + Math.random() * 180;

            drawTree(x, y, "#006200");
        }

        // Schleifen Schnee/Skifahrer/Wolken und Startkoordinaten
        //Schnee
        for (let i: number = 0; i < 800; i++) {
            snow[i] = new Snow(0, 0); //new ruft constructor auf // Neue Instanz einer Klasse wwird erstellt
        }
        //Wolken & new neues Objekt der Klasse wird eryeugt
        for (let i: number = 0; i < 2; i++) {
            cloud[i] = new Cloud(0 + Math.random() * 800, 130);

        }
        //Skifahrer
        for (let i: number = 0; i < 3; i++) {
            skifahrer[i] = new Skifahrer(0, 320);

        }


        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf 
        animate();

    }


    //Funktion für automatische Baumgenerierung
    function drawTree(_x: number, _y: number, _color: string): void {

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

    //Funktion zum animieren
    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren

        //Schnee
        for (let i: number = 0; i < snow.length; i++) {
            let s: Snow = snow[i]; // an der stelle [i] des arrays laden und per s.update an die Klasse übergeben
            s.update(); // Move and Draw aufrufen
        }

        //Wolken 
        for (let i: number = 0; i < cloud.length; i++) {
            let s: Cloud = cloud[i];
            s.update(); // Move and Draw aufrufen
        }



        //Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            let s: Skifahrer = skifahrer[i];
            s.update(); // Move and Draw aufrufen

        }

        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
}
