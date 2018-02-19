namespace Abschlussaufgabe {
    export class Fishs extends MovingObjects {

        dx: number;
        dy: number;


        constructor(_x: number, _y: number) {
            super(_x, _y);

            this.dx = 5 + Math.random() * 1;
            this.dy = 1 + Math.random();

        }

        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        update(): void {
            this.draw();
            this.move();
        }

        move(): void {
            if (this.x > 800) {
                this.x = 500;
                this.y = 400;
            }

            this.x += this.dx;
            this.y -= this.dy;
        }
    }

    draw(): void {

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


    
}
}