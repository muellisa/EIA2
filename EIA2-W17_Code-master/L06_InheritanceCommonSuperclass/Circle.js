var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Create circle");
            this.speed = 0.1;
            this.setRandomPosition(); // x und y werden neu definiert
            this.setRandomTargetPosition();
        }
        Circle.prototype.setRandomTargetPosition = function () {
            this.xTarget = Math.random() * L6_InheritanceCommonSuperclass.crc2.canvas.width;
            this.yTarget = Math.random() * L6_InheritanceCommonSuperclass.crc2.canvas.height;
        };
        Circle.prototype.draw = function () {
            L6_InheritanceCommonSuperclass.crc2.fillStyle = this.color;
            L6_InheritanceCommonSuperclass.crc2.beginPath();
            L6_InheritanceCommonSuperclass.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L6_InheritanceCommonSuperclass.crc2.fill();
        };
        Circle.prototype.move = function () {
            var xDiff = this.xTarget - this.x;
            var yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        };
        return Circle;
    }(L6_InheritanceCommonSuperclass.MovingShape));
    L6_InheritanceCommonSuperclass.Circle = Circle;
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=Circle.js.map