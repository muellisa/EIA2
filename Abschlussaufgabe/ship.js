var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Ship = (function (_super) {
        __extends(Ship, _super);
        function Ship(_x, _y) {
            _super.call(this, _x, _y);
            this.dx = 5 + Math.random() * 1;
            this.dy = 1 + Math.random();
        }
        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        Ship.prototype.update = function () {
            this.draw();
            this.move();
        };
        Ship.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
                this.y = 5;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Ship.prototype.draw = function () {
            //Boot
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(360, 0, 60, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "brown";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(360, 0);
            Abschlussaufgabe.crc2.lineTo(360, 60);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(300, 5);
            Abschlussaufgabe.crc2.lineTo(420, 5);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(306, 25);
            Abschlussaufgabe.crc2.lineTo(414, 25);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(319, 45);
            Abschlussaufgabe.crc2.lineTo(400, 45);
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        };
        return Ship;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Ship = Ship;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ship.js.map