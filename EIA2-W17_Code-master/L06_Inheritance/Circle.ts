namespace L06_Inheritance {
    export class Circle extends Square {

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            crc2.stroke();
        }
    }
}