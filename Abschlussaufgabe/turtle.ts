/* Name:Isabell Müller
     Matrikel:256034
     
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Abschlussaufgabe {
    export class Turtle extends MovingObjects {
        
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
                this.x = 0;
                this.y = 20;
            }

            this.x += this.dx;
            this.y += this.dy;
        }





        draw(): void {

            //Schildkröte Kopf
            crc2.beginPath();
            crc2.arc(this.x + 60, this.y + 50, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 42, this.y + 30, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 45, this.y + 35, 3, 0, 2 * Math.PI);
            crc2.arc(this.x + 50, this.y + 28, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 55, this.y + 37, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 60, this.y + 25, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 70, this.y + 32, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "lightgreen";
            crc2.fill();

            //Schildkr�te Augen
            //links
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 50, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 52, this.y + 50, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            //rechts
            crc2.beginPath();
            crc2.arc(this.x + 75, this.y + 50, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 77, this.y + 50, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            //Mund
            crc2.beginPath();
            crc2.arc(this.x + 65, this.y + 60, 5, 0, 1 * Math.PI);
            crc2.fillStyle = "#781414";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 65, this.y + 60, 3, 0, 1 * Math.PI);
            crc2.fillStyle = "#A91B1B";
            crc2.fill();


            //Schildkr�te K�rper
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y + 88, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 40, this.y + 74, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 80, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 38, this.y + 85, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 29, this.y + 93, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();

            //Schildkr�te Floss    
            crc2.beginPath();
            crc2.arc(this.x + 60, this.y + 85, 13, 0, 1 * Math.PI);
            crc2.fillStyle = "#142511";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 98, 10, 0, 1 * Math.PI);
            crc2.fillStyle = "#142511";
            crc2.fill();


        }
    }
}