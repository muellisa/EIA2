var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var MovingObjects = (function () {
        function MovingObjects(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("Create shape");
        }
        MovingObjects.prototype.update = function () {
            this.move();
            this.draw();
        };
        MovingObjects.prototype.move = function () {
            //abstract
        };
        MovingObjects.prototype.draw = function () {
            //abstract
        };
        return MovingObjects;
    }());
    Abschlussaufgabe.MovingObjects = MovingObjects;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=MovingObjects.js.map