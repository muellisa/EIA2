var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Fishs = (function (_super) {
        __extends(Fishs, _super);
        function Fishs(_x, _y) {
            _super.call(this, _x, _y);
            this.dx = 5 + Math.random() * 1;
            this.dy = 1 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        Fishs.prototype.update = function () {
            this.draw();
            this.move();
        };
        Fishs.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
                this.y = 50;
            }
            this.x += this.dx;
            this.y -= this.dy;
        };
        Fishs.prototype.draw = function () {
            //Fische
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 460, this.y + 380, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 420, this.y + 370);
            Abschlussaufgabe.crc2.lineTo(this.x + 460, this.y + 380);
            Abschlussaufgabe.crc2.lineTo(this.x + 420, this.y + 390);
            Abschlussaufgabe.crc2.strokeStyle = this.color;
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        };
        return Fishs;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Fishs = Fishs;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fishs.js.map