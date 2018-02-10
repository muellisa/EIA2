namespace Abschlussaufgabe {

    let canvas: HTMLCanvasElement;
    let ctx: any;
    let image: HTMLImageElement;
    let crc2: CanvasRenderingContext2D;

    function main(): void {
        initCanvas();



    }

    // canvas zeichnen
    function initCanvas(): void {

        canvas = <HTMLCanvasElement>document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        image = <HTMLImageElement>document.getElementById('background');

        ctx.drawImage(image, 0, 0); // Parameter: Bildreferenz, x, y


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

    }

    // Main ausführen, sobald DOM Inhalte geladen sind;
    document.addEventListener('DOMContentLoaded', main);
}
