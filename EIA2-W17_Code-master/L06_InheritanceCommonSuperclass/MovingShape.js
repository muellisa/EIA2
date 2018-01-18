var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    var MovingShape = (function () {
        function MovingShape(_x, _y) {
            console.log("Create shape");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        MovingShape.prototype.update = function () {
            this.move();
            this.draw();
        };
        MovingShape.prototype.draw = function () {
            // abstract
        };
        MovingShape.prototype.move = function () {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        };
        MovingShape.prototype.setRandomPosition = function () {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        };
        // different random style
        MovingShape.prototype.setRandomStyle = function () {
            this.size = Math.random() * 10 + 5;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return MovingShape;
    }());
    L6_InheritanceCommonSuperclass.MovingShape = MovingShape;
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=MovingShape.js.map