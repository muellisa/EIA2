/* Name:Isabell M�ller
     Matrikel:256034
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Aufgabe6 {
       export class Cloud extends MovingObject {
        g: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.color = "#99E5D0";
            this.g = Math.random() * 1 + 0.3;
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.g;
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 45, this.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 23, this.y - 20, 25, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
    }
}