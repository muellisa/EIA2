var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Inheritance;
(function (L06_Inheritance) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            _super.apply(this, arguments);
        }
        Circle.prototype.draw = function () {
            L06_Inheritance.crc2.fillStyle = this.color;
            L06_Inheritance.crc2.beginPath();
            L06_Inheritance.crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            L06_Inheritance.crc2.stroke();
        };
        return Circle;
    }(L06_Inheritance.Square));
    L06_Inheritance.Circle = Circle;
})(L06_Inheritance || (L06_Inheritance = {}));
//# sourceMappingURL=Circle.js.map