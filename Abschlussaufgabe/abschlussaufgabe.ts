namespace Abschlussaufgabe {
    //  EventListener hört auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    export let crc2: CanvasRenderingContext2D;
    let objects: MovingObjects[] = [];


    let imgData: ImageData;
    var image: HTMLImageElement;
    let ShipHit: number = 0;
    let NetHit: number = 0;
    let RockHit: number = 0;
    let RiffHit: number = 0;


    /* ----------------------------------------
       ---------------------------------------
       ---------------------------------------*/


    // Funktion für den Canvas
    function draw(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund einbinden
        image = <HTMLImageElement>document.getElementById('background');
        crc2.drawImage(image, 0, 0); // Parameter: Bildreferenz, x, y

        alert(" Sammy die Schildkröte ist neu im Riff. Hilf ihm seine Umgebung zu entdecken!");


        document.getElementById("ShipHitBox").addEventListener("click", ShipClick)
        document.getElementById("NetHitBox").addEventListener("click", NetClick)
        document.getElementById("RockHitBox").addEventListener("click", RockClick)
        document.getElementById("RiffHitBox").addEventListener("click", RiffClick)


        //Riff
        crc2.beginPath();
        crc2.arc(780, 35, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "gray";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(780, 130, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "gray";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(200, 540, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "gray";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(400, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(460, 580, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "gray";
        crc2.fill();

        //Netz
        crc2.beginPath();
        crc2.moveTo(0, 90);
        crc2.lineTo(160, 0);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 60);
        crc2.lineTo(110, 0);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 30);
        crc2.lineTo(55, 0);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 30);
        crc2.lineTo(30, 74);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(35, 0);
        crc2.lineTo(80, 45);
        crc2.stroke();
        crc2.fill();


        //Schildkröte Sammy
        for (let i: number = 0; i < 1; i++) {
            let tu: Turtle = new Turtle(0, 50);
            objects.push(tu);

        }

        //Boot

        for (let i: number = 0; i < 1; i++) {
            let sh: Ship = new Ship(0, 10);
            objects.push(sh);

        }



        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf
        animate();

    }
    /* ----------------------------------------
       ---------------------------------------
       -----------------------------------*/
    function ShipClick(): void {
        ShipHit++;
        if (ShipHit >= 1) {
            alert(" Dies ist ein Schiff, dort sind Menschen. Ihnen musst du mit Vorsicht begegnen!");
        }
    }

    function NetClick(): void {
        NetHit++;
        if (NetHit >= 1) {
            alert(" Nimm dich in Acht! Pass auf und verfange dich nicht im Fischernetz!!");
        }
    }
    
    function RiffClick(): void {
        RiffHit++;
        if (RiffHit >= 1) {
            alert("Autsch!Das Riff ist ganz schön spitz und piekst!");
        }
    }

    function RockClick(): void {
        RockHit++;
        if (RockHit <= 1) {
            //Fische
            alert("Oh jetzt hast du die Fische aufgemischt.");
            for (let i: number = 0; i < 6; i++) {
                let fi: Fishs = new Fishs(0, 60);
                objects.push(fi);

            }
        }
    }

    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren


        for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }
        window.setTimeout(animate, 65); //Alle 65ms startet Funktion sich selbst neu*/

    }

}

