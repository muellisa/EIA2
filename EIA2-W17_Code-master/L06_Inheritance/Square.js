var L06_Inheritance;
(function (L06_Inheritance) {
    var Square = (function () {
        function Square(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Square.prototype.sayHello = function () {
            console.log("Hallo");
        };
        Square.prototype.update = function () {
            this.move();
            this.draw();
        };
        Square.prototype.move = function () {
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        };
        Square.prototype.draw = function () {
            L06_Inheritance.crc2.fillStyle = this.color;
            L06_Inheritance.crc2.fillRect(this.x, this.y, this.size, this.size);
        };
        Square.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Square;
    }());
    L06_Inheritance.Square = Square;
})(L06_Inheritance || (L06_Inheritance = {}));
//# sourceMappingURL=Square.js.map