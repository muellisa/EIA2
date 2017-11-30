/* Name:Isabell M�ller
     Matrikel:256034
     Datum:30.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe6;
(function (Aufgabe6) {
    var MovingObject = (function () {
        function MovingObject(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("Create shape");
        }
        MovingObject.prototype.update = function () {
            this.move();
            this.draw();
        };
        MovingObject.prototype.move = function () {
            //abstract
        };
        MovingObject.prototype.draw = function () {
            //abstract
        };
        return MovingObject;
    }());
    Aufgabe6.MovingObject = MovingObject;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=MovingObject.js.map