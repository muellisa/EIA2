/* Name:Isabell M�ller
     Matrikel:256034
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe5;
(function (Aufgabe5) {
    var Cloud = (function () {
        /*new ruft constructor methode auf somit kann beim Konstruieren des Objektes
                 Informationen uebergeben werden*/
        function Cloud(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.color = "#FFFFFF";
            this.g = Math.random() * 1 + 0.3;
        }
        Cloud.prototype.sayHello = function () {
            console.log("Hello Clouds");
        };
        Cloud.prototype.update = function () {
            this.move();
            this.draw();
        };
        Cloud.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.g;
        };
        Cloud.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 45, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 23, this.y - 20, 25, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
        };
        return Cloud;
    }());
    Aufgabe5.Cloud = Cloud;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=cloud.js.map