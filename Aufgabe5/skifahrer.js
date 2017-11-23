/* Name:Isabell M�ller
     Matrikel:256034
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe5;
(function (Aufgabe5) {
    var Skifahrer = (function () {
        /*new ruft constructor methode auf somit kann beim Konstruieren des Objektes
                Informationen uebergeben werden*/
        function Skifahrer(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.dx = 3 + Math.random() * 3;
            this.dy = 2 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        Skifahrer.prototype.sayHello = function () {
            console.log("Hallo Skifahrer");
        };
        /* this verweist auf die Eigenschaften und Methoden eines Objektes */
        Skifahrer.prototype.update = function () {
            this.move();
            this.draw();
        };
        Skifahrer.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
                this.y = 340;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Skifahrer.prototype.draw = function () {
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x, this.y, 50, -10);
            Aufgabe5.crc2.fillRect(this.x + 10, this.y - 10, 16, -40);
            //Kopf
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 18, this.y - 50, 12, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x + 20, this.y - 35);
            Aufgabe5.crc2.lineTo(this.x + 40, this.y - 30);
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x + 40, this.y - 30);
            Aufgabe5.crc2.lineTo(this.x + 55, this.y - 10);
            Aufgabe5.crc2.stroke();
        };
        return Skifahrer;
    }());
    Aufgabe5.Skifahrer = Skifahrer;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=skifahrer.js.map