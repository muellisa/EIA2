var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    var Square = (function (_super) {
        __extends(Square, _super);
        function Square(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Create square");
        }
        Square.prototype.draw = function () {
            L6_InheritanceCommonSuperclass.crc2.fillStyle = this.color;
            L6_InheritanceCommonSuperclass.crc2.fillRect(this.x, this.y, this.size, this.size);
        };
        return Square;
    }(L6_InheritanceCommonSuperclass.MovingShape));
    L6_InheritanceCommonSuperclass.Square = Square;
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=Square.js.map