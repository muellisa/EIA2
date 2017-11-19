/* Name:Isabell M�ller
     Matrikel:256034
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Aufgabe5 {
    export class Skifahrer {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.dx = 3 + Math.random() * 3;
            this.dy = 2 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        sayHello(): void {
            console.log("Hallo Skifahrer");
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 150;
            }

            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 50, -10);

            crc2.fillRect(this.x + 10, this.y - 10, 16, -40);

            //Kopf
            crc2.beginPath();
            crc2.arc(this.x + 18, this.y - 50, 12, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 35);
            crc2.lineTo(this.x + 40, this.y - 30);
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 40, this.y - 30);
            crc2.lineTo(this.x + 55, this.y - 10);
            crc2.stroke();
        }
    }
}