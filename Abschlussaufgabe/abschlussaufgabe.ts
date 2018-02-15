namespace Abschlussaufgabe {
    //  EventListener hört auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt, beginnt Funktion
    window.addEventListener("load", draw);
    export let crc2: CanvasRenderingContext2D;

    let turtle: Turtle[] = [];
    let imgData: ImageData;
    var image: HTMLImageElement;
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


        //Boot
        crc2.beginPath();
        crc2.arc(360, 0, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(360, 0);
        crc2.lineTo(360, 60);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(300, 5);
        crc2.lineTo(420, 5);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(306, 25);
        crc2.lineTo(414, 25);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
        
        crc2.beginPath();
        crc2.moveTo(319, 45);
        crc2.lineTo(400, 45);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();


        //Schildkröte Sammy
        for (let i: number = 0; i < 1; i++) {
            turtle[i] = new Turtle(0, 50);

        }

        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf
        animate();

    }
/* ----------------------------------------
   ---------------------------------------
   ---------------------------------------*/
    
    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren


        //Schildkröte
        for (let i: number = 0; i < turtle.length; i++) {
            let s: Turtle = turtle[i];
            s.update(); // Move and Draw aufrufen
            window.setTimeout(animate, 300); //Alle 65ms startet Funktion sich selbst neu*/

        }
    }
}
