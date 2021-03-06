var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Name:Isabell M�ller
     Matrikel:256034
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe6;
(function (Aufgabe6) {
    var Skifahrer = (function (_super) {
        __extends(Skifahrer, _super);
        function Skifahrer(_x, _y) {
            _super.call(this, _x, _y);
            this.dx = 3 + Math.random() * 3;
            this.dy = 2 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        Skifahrer.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
                this.y = 350;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Skifahrer.prototype.draw = function () {
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fillRect(this.x, this.y, 50, -10);
            Aufgabe6.crc2.fillRect(this.x + 10, this.y - 10, 16, -40);
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 18, this.y - 50, 12, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x + 20, this.y - 35);
            Aufgabe6.crc2.lineTo(this.x + 40, this.y - 30);
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x + 40, this.y - 30);
            Aufgabe6.crc2.lineTo(this.x + 55, this.y - 10);
            Aufgabe6.crc2.stroke();
        };
        return Skifahrer;
    }(Aufgabe6.MovingObject));
    Aufgabe6.Skifahrer = Skifahrer;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=skifahrer.js.map