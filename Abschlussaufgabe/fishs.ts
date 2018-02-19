namespace Abschlussaufgabe {
    export class Fishs extends MovingObjects {

        dx: number;
        dy: number;
        color: string;


        constructor(_x: number, _y: number) {
            super(_x, _y);

            this.dx = 5 + Math.random() * 1;
            this.dy = 1 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

        }

        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        update(): void {
            this.draw();
            this.move();
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 50;
            }

            this.x += this.dx;
            this.y -= this.dy;
        }

        draw(): void {

            //Fische
            crc2.beginPath();
            crc2.arc(this.x + 460, this.y + 380, 20, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 420, this.y + 370);
            crc2.lineTo(this.x + 460, this.y + 380);
            crc2.lineTo(this.x + 420, this.y + 390);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fill();





        }
    }
}