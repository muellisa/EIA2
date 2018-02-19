var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Name:Isabell Müller
     Matrikel:256034
     
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Turtle = (function (_super) {
        __extends(Turtle, _super);
        function Turtle(_x, _y) {
            _super.call(this, _x, _y);
            this.dx = 5 + Math.random() * 1;
            this.dy = 1 + Math.random();
        }
        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        Turtle.prototype.update = function () {
            this.draw();
            this.move();
        };
        Turtle.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
                this.y = 20;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Turtle.prototype.draw = function () {
            //Schildkröte Kopf
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 60, this.y + 50, 30, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "green";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 42, this.y + 30, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "lightgreen";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 45, this.y + 35, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.arc(this.x + 50, this.y + 28, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "lightgreen";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 55, this.y + 37, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "lightgreen";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 60, this.y + 25, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "lightgreen";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 70, this.y + 32, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "lightgreen";
            Abschlussaufgabe.crc2.fill();
            //Schildkr�te Augen
            //links
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 50, this.y + 50, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "blue";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 52, this.y + 50, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
            //rechts
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 75, this.y + 50, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "blue";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 77, this.y + 50, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
            //Mund
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 65, this.y + 60, 5, 0, 1 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#781414";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 65, this.y + 60, 3, 0, 1 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#A91B1B";
            Abschlussaufgabe.crc2.fill();
            //Schildkr�te K�rper
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 40, this.y + 88, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "green";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 40, this.y + 74, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "brown";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 30, this.y + 80, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "brown";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 38, this.y + 85, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "brown";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 29, this.y + 93, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "brown";
            Abschlussaufgabe.crc2.fill();
            //Schildkr�te Floss    
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 60, this.y + 85, 13, 0, 1 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#142511";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 30, this.y + 98, 10, 0, 1 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#142511";
            Abschlussaufgabe.crc2.fill();
        };
        return Turtle;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Turtle = Turtle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=turtle.js.map