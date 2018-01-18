var L06_Inheritance;
(function (L06_Inheritance) {
    var square;
    var circle;
    //let squares: Square[] = [];
    window.addEventListener("load", init);
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L06_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L06_Inheritance.crc2);
        square = new L06_Inheritance.Square(200, 100);
        square.setRandomStyle();
        circle = new L06_Inheritance.Circle(200, 100);
        circle.setRandomStyle();
        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Square = new Square(200, 150);
                    s.setRandomStyle();
                    squares[i] = s;
                }
        */
        animate();
    }
    function animate() {
        L06_Inheritance.crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren
        square.update();
        circle.update();
        /*
                for (let i: number = 0; i < squares.length; i++) {
                    let s: Square = squares[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
})(L06_Inheritance || (L06_Inheritance = {}));
//# sourceMappingURL=Main.js.map