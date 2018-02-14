namespace Abschlussaufgabe {
    //  EventListener hört auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt, beginnt Funktion

    window.addEventListener("load", draw);
    export let crc2: CanvasRenderingContext2D;

    let turtle: Turtle[] = [];
    let imgData: ImageData;

    // Funktion für den Canvas
    function draw(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Skifahrer
        for (let i: number = 0; i < 1; i++) {
            turtle[i] = new Turtle(0, 50);

        }

        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf
        animate();

    }

    function animate(): void {
        console.log("Timeout");



        //Schildkröte
        for (let i: number = 0; i < turtle.length; i++) {
            let s: Turtle = turtle[i];
            s.update(); // Move and Draw aufrufen

        }
    }


    window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu*/
}
