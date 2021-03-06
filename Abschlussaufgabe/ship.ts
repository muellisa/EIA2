namespace Abschlussaufgabe {
    export class Ship extends MovingObjects {

        
       
       

        constructor(_x: number, _y: number) {
            super(_x, _y);

            

        }

        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        update(): void {
            this.draw();
            
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
}